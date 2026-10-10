import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, renameSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

if (process.platform !== "linux" || !process.env.WSL_DISTRO_NAME) {
  process.exit(0);
}

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lock = JSON.parse(readFileSync(join(appDir, "package-lock.json"), "utf8"));
const arch = { x64: "x64", arm64: "arm64" }[process.arch];
if (!arch) {
  throw new Error(`WSL native dependencies are not configured for ${process.arch}.`);
}

const libc = process.report.getReport().header.glibcVersionRuntime ? "gnu" : "musl";
const muslSuffix = libc === "musl" ? "musl" : "";
const packageNames = [
  `@esbuild/linux-${arch}`,
  `@next/swc-linux-${arch}-${libc}`,
  `@img/sharp-linux${muslSuffix}-${arch}`,
  `@img/sharp-libvips-linux${muslSuffix}-${arch}`,
];
const modulesDir = join(appDir, "node_modules");

function hasNativePayload(packageName, directory) {
  if (packageName.startsWith("@esbuild/")) {
    return existsSync(join(directory, "bin", "esbuild"));
  }
  const entries = readdirSync(directory);
  if (entries.some(name => name.endsWith(".node"))) return true;
  if (packageName.startsWith("@img/sharp-") && !packageName.startsWith("@img/sharp-libvips-")) {
    const libDir = join(directory, "lib");
    return existsSync(libDir) && readdirSync(libDir).some(name => name.endsWith(".node"));
  }
  if (packageName.startsWith("@img/sharp-libvips-")) {
    const libDir = join(directory, "lib");
    return existsSync(libDir) && readdirSync(libDir).some(name => name.includes(".so"));
  }
  return false;
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: "inherit", ...options });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} exited with status ${result.status ?? "unknown"}.`);
  }
}

for (const packageName of packageNames) {
  const lockEntry = lock.packages[`node_modules/${packageName}`];
  if (!lockEntry) continue;

  const destination = join(modulesDir, packageName);
  const installedManifest = join(destination, "package.json");
  if (existsSync(installedManifest)) {
    const installed = JSON.parse(readFileSync(installedManifest, "utf8"));
    if (installed.version === lockEntry.version && hasNativePayload(packageName, destination)) continue;
    throw new Error(
      `${packageName} ${installed.version} is incomplete or does not match lockfile version ${lockEntry.version}. ` +
      "Restore the platform package before continuing.",
    );
  }

  mkdirSync(dirname(destination), { recursive: true });
  const packDir = mkdtempSync(join(tmpdir(), "dino-battle-wsl-"));
  let stagedDir;
  try {
    run("npm", [
      "pack",
      `${packageName}@${lockEntry.version}`,
      "--ignore-scripts",
      "--pack-destination",
      packDir,
    ], { cwd: appDir });

    const archiveName = readdirSync(packDir).find(name => name.endsWith(".tgz"));
    if (!archiveName) throw new Error(`npm did not create an archive for ${packageName}.`);
    const archive = join(packDir, archiveName);
    const integrity = `sha512-${createHash("sha512").update(readFileSync(archive)).digest("base64")}`;
    if (!lockEntry.integrity?.split(/\s+/).includes(integrity)) {
      throw new Error(`Downloaded ${packageName} does not match the integrity recorded in package-lock.json.`);
    }

    stagedDir = join(dirname(destination), `.${packageName.split("/").at(-1)}-wsl-${process.pid}`);
    mkdirSync(stagedDir, { recursive: false });
    run("tar", ["-xzf", archive, "--strip-components=1", "-C", stagedDir]);

    const stagedManifest = JSON.parse(readFileSync(join(stagedDir, "package.json"), "utf8"));
    if (stagedManifest.version !== lockEntry.version || !hasNativePayload(packageName, stagedDir)) {
      throw new Error(
        `Downloaded ${packageName} is incomplete or has version ${stagedManifest.version}; expected ${lockEntry.version}.`,
      );
    }
    renameSync(stagedDir, destination);
    stagedDir = undefined;
    console.log(`Added Linux native dependency ${packageName}@${lockEntry.version} without changing Windows binaries.`);
  } finally {
    if (stagedDir && existsSync(stagedDir)) rmSync(stagedDir, { recursive: true, force: true });
    rmSync(packDir, { recursive: true, force: true });
  }
}
