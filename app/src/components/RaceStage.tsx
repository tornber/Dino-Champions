"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { io, type Socket } from "socket.io-client";

type RacerState = {
  id: string;
  name: string;
  connected: boolean;
  distance: number;
  speed: number;
  lane: number;
  laneVelocity: number;
  steer: -1 | 0 | 1;
  points: number;
  place: number;
  lap: number;
  finished: boolean;
};
type RaceState = {
  phase: "countdown" | "racing" | "results";
  round: number;
  phaseEndsAt: number;
  distance: number;
  lapDistance: number;
  totalLaps: number;
  maxPlayers: number;
  players: RacerState[];
};
type Controls = { accelerate: boolean; brake: boolean; steer: -1 | 0 | 1 };
type RaceWheel = { steeringPivot: THREE.Group; spinPivot: THREE.Group; isFront: boolean };
type RaceCar = { root: THREE.Group; wheels: RaceWheel[]; flame: THREE.Mesh };

const TRACK_WIDTH = 28;
const TRACK_SAMPLES = 420;
const MAX_VISIBLE_RACERS = 4;
const MAX_SPEED_KMH = 148;

function playerColor(id: string) {
  const hash = [...id].reduce((value, character) => (value * 31 + character.charCodeAt(0)) >>> 0, 7);
  return new THREE.Color().setHSL((hash % 360) / 360, 0.76, 0.49);
}

function makeTrackCurve() {
  const points = Array.from({ length: 100 }, (_, index) => {
    const angle = (index / 100) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * 76, 0, Math.sin(angle) * 112);
  });
  return new THREE.CatmullRomCurve3(points, true, "catmullrom", 0.18);
}

function pointOnTrack(curve: THREE.Curve<THREE.Vector3>, progress: number, lane = 1.5) {
  const t = ((progress % 1) + 1) % 1;
  const position = curve.getPointAt(t);
  const tangent = curve.getTangentAt(t).normalize();
  const side = new THREE.Vector3(-tangent.z, 0, tangent.x);
  position.addScaledVector(side, (lane - 1.5) * 3.2);
  return { position, tangent };
}

function addTrackSurface(scene: THREE.Scene, curve: THREE.Curve<THREE.Vector3>) {
  const positions: number[] = [];
  const indices: number[] = [];
  const halfWidth = TRACK_WIDTH / 2;

  for (let index = 0; index <= TRACK_SAMPLES; index += 1) {
    const t = index / TRACK_SAMPLES;
    const center = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();
    const side = new THREE.Vector3(-tangent.z, 0, tangent.x);
    for (const edge of [-halfWidth, halfWidth]) {
      const vertex = center.clone().addScaledVector(side, edge);
      vertex.y = 0.03;
      positions.push(vertex.x, vertex.y, vertex.z);
    }
    if (index < TRACK_SAMPLES) {
      const start = index * 2;
      indices.push(start, start + 1, start + 2, start + 1, start + 3, start + 2);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const road = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0x282d33, roughness: 0.94, metalness: 0.03 }),
  );
  road.receiveShadow = true;
  scene.add(road);

  const kerbGeometries = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];
  const kerbPositions: number[][] = [[], []];
  const kerbIndices: number[][] = [[], []];
  for (let index = 0; index < TRACK_SAMPLES; index += 1) {
    const t0 = index / TRACK_SAMPLES;
    const t1 = (index + 1) / TRACK_SAMPLES;
    const center0 = curve.getPointAt(t0);
    const center1 = curve.getPointAt(t1);
    const tangent0 = curve.getTangentAt(t0).normalize();
    const tangent1 = curve.getTangentAt(t1).normalize();
    const side0 = new THREE.Vector3(-tangent0.z, 0, tangent0.x);
    const side1 = new THREE.Vector3(-tangent1.z, 0, tangent1.x);
    const colorIndex = Math.floor(index / 5) % 2;

    for (const direction of [-1, 1]) {
      const vertices = kerbPositions[colorIndex];
      const indicesForColor = kerbIndices[colorIndex];
      const first = vertices.length / 3;
      for (const [center, side, offset] of [
        [center0, side0, direction * 11.65],
        [center0, side0, direction * 14],
        [center1, side1, direction * 11.65],
        [center1, side1, direction * 14],
      ] as const) {
        const vertex = center.clone().addScaledVector(side, offset);
        vertex.y = 0.09;
        vertices.push(vertex.x, vertex.y, vertex.z);
      }
      indicesForColor.push(first, first + 1, first + 2, first + 1, first + 3, first + 2);
    }
  }

  kerbGeometries.forEach((geometry, index) => {
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(kerbPositions[index], 3));
    geometry.setIndex(kerbIndices[index]);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        color: index === 0 ? 0xf2f2ec : 0xe5453f,
        roughness: 0.76,
        side: THREE.DoubleSide,
      }),
    );
    mesh.receiveShadow = true;
    scene.add(mesh);
  });

  const railMaterial = new THREE.MeshStandardMaterial({ color: 0xbcc7d0, metalness: 0.7, roughness: 0.31 });
  for (const direction of [-1, 1]) {
    const railPoints = Array.from({ length: 100 }, (_, index) => {
      const t = index / 100;
      const center = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t).normalize();
      return center.add(new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(direction * 15.2))
        .setY(0.78);
    });
    const railCurve = new THREE.CatmullRomCurve3(railPoints, true, "centripetal");
    const rail = new THREE.Mesh(new THREE.TubeGeometry(railCurve, 600, 0.2, 7, true), railMaterial);
    rail.castShadow = true;
    scene.add(rail);
  }

  const dashedMaterial = new THREE.MeshStandardMaterial({ color: 0xf3f3e8, roughness: 0.78 });
  const centerPoints = Array.from({ length: 240 }, (_, index) => {
    const point = curve.getPointAt(index / 240);
    return point.setY(0.065);
  });
  const centerLine = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(centerPoints),
    new THREE.LineBasicMaterial({ color: 0x60666c }),
  );
  scene.add(centerLine);

  for (const lane of [-0.5, 0.5]) {
    for (let index = 0; index < 120; index += 2) {
      const t = index / 120;
      const center = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t).normalize();
      const side = new THREE.Vector3(-tangent.z, 0, tangent.x);
      const dash = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.025, 2.4), dashedMaterial);
      dash.position.copy(center.addScaledVector(side, lane * 3.2));
      dash.position.y = 0.075;
      dash.rotation.y = Math.atan2(tangent.x, tangent.z);
      scene.add(dash);
    }
  }

  const start = pointOnTrack(curve, 0);
  const startRotation = Math.atan2(start.tangent.x, start.tangent.z);
  const tileCount = 28;
  const tileMaterial = [
    new THREE.MeshStandardMaterial({ color: 0xf5f5f2, roughness: 0.72 }),
    new THREE.MeshStandardMaterial({ color: 0x151719, roughness: 0.72 }),
  ];
  for (let tile = 0; tile < tileCount; tile += 1) {
    const offset = (tile - (tileCount - 1) / 2) * (TRACK_WIDTH / tileCount);
    const checker = new THREE.Mesh(new THREE.BoxGeometry(TRACK_WIDTH / tileCount, 0.055, 1.35), tileMaterial[tile % 2]);
    checker.position.copy(start.position);
    checker.position.add(new THREE.Vector3(-start.tangent.z, 0, start.tangent.x).multiplyScalar(offset));
    checker.position.y = 0.105;
    checker.rotation.y = startRotation;
    scene.add(checker);
  }

}

function addGrandstand(
  scene: THREE.Scene,
  curve: THREE.Curve<THREE.Vector3>,
  progress: number,
  sideSign: number,
  materials: THREE.Material[],
) {
  const trackPoint = curve.getPointAt(progress);
  const tangent = curve.getTangentAt(progress).normalize();
  const side = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(sideSign);
  const stand = new THREE.Group();
  stand.position.copy(trackPoint).addScaledVector(side, 26);
  stand.position.y = 0.05;
  stand.rotation.y = Math.atan2(tangent.x, tangent.z);

  const base = new THREE.Mesh(new THREE.BoxGeometry(29, 1.1, 9), materials[0]);
  base.position.y = 0.55;
  base.castShadow = true;
  stand.add(base);
  for (let row = 0; row < 5; row += 1) {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(27, 0.34, 1.25), materials[1 + row % (materials.length - 1)]);
    seat.position.set(0, 1.3 + row * 0.62, -3.15 + row * 1.15);
    seat.castShadow = true;
    seat.receiveShadow = true;
    stand.add(seat);
  }
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(31, 0.45, 11),
    new THREE.MeshStandardMaterial({ color: 0x283746, metalness: 0.47, roughness: 0.4 }),
  );
  roof.position.set(0, 4.95, 0);
  roof.castShadow = true;
  stand.add(roof);
  scene.add(stand);
}

function addTree(
  scene: THREE.Scene,
  position: THREE.Vector3,
  trunkGeometry: THREE.CylinderGeometry,
  crownGeometry: THREE.IcosahedronGeometry,
  materials: THREE.Material[],
  scale: number,
) {
  const tree = new THREE.Group();
  const trunk = new THREE.Mesh(trunkGeometry, materials[0]);
  trunk.position.y = scale * 1.1;
  trunk.scale.set(scale, scale, scale);
  trunk.castShadow = true;
  const crown = new THREE.Mesh(crownGeometry, materials[1 + Math.floor(scale * 2) % (materials.length - 1)]);
  crown.position.y = scale * 3;
  crown.scale.set(scale * 1.5, scale * 1.85, scale * 1.5);
  crown.castShadow = true;
  tree.add(trunk, crown);
  tree.position.copy(position);
  scene.add(tree);
}

function addWorld(scene: THREE.Scene, curve: THREE.Curve<THREE.Vector3>) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(800, 800),
    new THREE.MeshStandardMaterial({ color: 0x38644b, roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.16;
  ground.receiveShadow = true;
  scene.add(ground);

  const turf = new THREE.Mesh(
    new THREE.CircleGeometry(1, 160),
    new THREE.MeshStandardMaterial({ color: 0x426b49, roughness: 1, side: THREE.DoubleSide }),
  );
  turf.rotation.x = -Math.PI / 2;
  turf.position.y = -0.1;
  turf.scale.set(61, 97, 1);
  scene.add(turf);

  const treeMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x61412c, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0x235b3d, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0x34734a, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0x458355, roughness: 1 }),
  ];
  const trunkGeometry = new THREE.CylinderGeometry(0.28, 0.43, 2, 7);
  const crownGeometry = new THREE.IcosahedronGeometry(1, 1);
  for (let index = 0; index < 44; index += 1) {
    const progress = index / 44;
    const point = curve.getPointAt(progress);
    const tangent = curve.getTangentAt(progress).normalize();
    const side = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const distance = 25 + ((index * 17) % 24);
    const position = point.addScaledVector(side, index % 2 === 0 ? distance : -distance);
    addTree(scene, position, trunkGeometry, crownGeometry, treeMaterials, 0.8 + (index % 5) * 0.13);
  }

  const standMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x626b73, roughness: 0.84 }),
    new THREE.MeshStandardMaterial({ color: 0x176bd1, roughness: 0.57 }),
    new THREE.MeshStandardMaterial({ color: 0xe74e4c, roughness: 0.57 }),
    new THREE.MeshStandardMaterial({ color: 0xffcc55, roughness: 0.57 }),
    new THREE.MeshStandardMaterial({ color: 0xf4f5f3, roughness: 0.57 }),
  ];
  addGrandstand(scene, curve, 0.16, 1, standMaterials);
  addGrandstand(scene, curve, 0.42, -1, standMaterials);
  addGrandstand(scene, curve, 0.66, 1, standMaterials);
  addGrandstand(scene, curve, 0.9, -1, standMaterials);

  const lampMaterial = new THREE.MeshStandardMaterial({
    color: 0x75808a,
    metalness: 0.8,
    roughness: 0.25,
  });
  const lampGlow = new THREE.MeshStandardMaterial({
    color: 0xfff4d0,
    emissive: 0xffe4a0,
    emissiveIntensity: 2.4,
  });
  for (let index = 0; index < 12; index += 1) {
    const progress = index / 12;
    const point = curve.getPointAt(progress);
    const tangent = curve.getTangentAt(progress).normalize();
    const side = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const position = point.addScaledVector(side, index % 2 === 0 ? 20 : -20);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 17, 8), lampMaterial);
    post.position.copy(position);
    post.position.y = 8.5;
    post.castShadow = true;
    scene.add(post);
    const head = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.42, 1.25), lampGlow);
    head.position.copy(position);
    head.position.y = 17;
    scene.add(head);
  }
}

function addBox(
  parent: THREE.Object3D,
  geometry: THREE.BoxGeometry,
  material: THREE.Material,
  position: [number, number, number],
) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function createCar(player: RacerState, isPlayer: boolean): RaceCar {
  const root = new THREE.Group();
  const paint = playerColor(player.id);
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: paint,
    metalness: 0.72,
    roughness: 0.24,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
  });
  const darkPaint = new THREE.MeshStandardMaterial({ color: 0x111820, metalness: 0.75, roughness: 0.31 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x17334a,
    metalness: 0.62,
    roughness: 0.13,
    clearcoat: 1,
    transparent: true,
    opacity: 0.94,
  });
  const tireMaterial = new THREE.MeshStandardMaterial({ color: 0x101215, roughness: 0.87, metalness: 0.02 });
  const rimMaterial = new THREE.MeshStandardMaterial({ color: 0x9eabb5, roughness: 0.23, metalness: 0.88 });
  const lightMaterial = new THREE.MeshStandardMaterial({
    color: 0xe4f5ff,
    emissive: 0xa3dfff,
    emissiveIntensity: 2.8,
    roughness: 0.25,
  });
  const tailMaterial = new THREE.MeshStandardMaterial({
    color: 0xff3737,
    emissive: 0xff0808,
    emissiveIntensity: 2.5,
    roughness: 0.3,
  });
  const wheelGeometry = new THREE.CylinderGeometry(0.49, 0.49, 0.42, 32);
  const rimGeometry = new THREE.CylinderGeometry(0.29, 0.29, 0.435, 28);
  const wheelCenters: [number, number, number][] = [
    [-1.15, 0.49, 1.36],
    [1.15, 0.49, 1.36],
    [-1.15, 0.49, -1.35],
    [1.15, 0.49, -1.35],
  ];
  const wheels = wheelCenters.map(([x, y, z], index) => {
    const steeringPivot = new THREE.Group();
    steeringPivot.position.set(x, y, z);
    const spinPivot = new THREE.Group();
    const tire = new THREE.Mesh(wheelGeometry, tireMaterial);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    spinPivot.add(tire);
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    rim.rotation.z = Math.PI / 2;
    spinPivot.add(rim);
    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.085, 0.085, 0.45, 16),
      new THREE.MeshStandardMaterial({ color: paint, metalness: 0.8, roughness: 0.24 }),
    );
    hub.rotation.z = Math.PI / 2;
    spinPivot.add(hub);
    steeringPivot.add(spinPivot);
    root.add(steeringPivot);
    return { steeringPivot, spinPivot, isFront: index < 2 };
  });

  const bodyShape = new THREE.Shape();
  bodyShape.moveTo(-2.27, 0.47);
  bodyShape.lineTo(-2.22, 0.77);
  bodyShape.lineTo(-1.72, 0.94);
  bodyShape.lineTo(-1.12, 1.02);
  bodyShape.lineTo(-0.78, 1.57);
  bodyShape.quadraticCurveTo(-0.61, 1.77, -0.34, 1.78);
  bodyShape.lineTo(0.63, 1.78);
  bodyShape.quadraticCurveTo(0.88, 1.75, 1.03, 1.51);
  bodyShape.lineTo(1.51, 0.97);
  bodyShape.lineTo(2.14, 0.82);
  bodyShape.lineTo(2.29, 0.65);
  bodyShape.lineTo(2.22, 0.48);
  bodyShape.closePath();
  const bodyGeometry = new THREE.ExtrudeGeometry(bodyShape, {
    depth: 1.86,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.055,
    bevelThickness: 0.045,
    curveSegments: 8,
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.rotation.y = -Math.PI / 2;
  body.position.x = 0.93;
  body.castShadow = true;
  body.receiveShadow = true;
  root.add(body);

  const cabinShape = new THREE.Shape();
  cabinShape.moveTo(-1.04, 1.04);
  cabinShape.lineTo(-0.68, 1.62);
  cabinShape.quadraticCurveTo(-0.56, 1.75, -0.34, 1.75);
  cabinShape.lineTo(0.62, 1.75);
  cabinShape.lineTo(1.13, 1.04);
  cabinShape.closePath();
  const cabinGeometry = new THREE.ExtrudeGeometry(cabinShape, {
    depth: 1.43,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.025,
    bevelThickness: 0.025,
  });
  const cabin = new THREE.Mesh(cabinGeometry, glass);
  cabin.rotation.y = -Math.PI / 2;
  cabin.position.x = 0.715;
  cabin.castShadow = true;
  root.add(cabin);

  const roof = addBox(root, new THREE.BoxGeometry(1.32, 0.13, 1.08), bodyMaterial, [0, 1.78, 0.1]);
  roof.rotation.x = -0.035;
  addBox(root, new THREE.BoxGeometry(1.99, 0.15, 0.14), darkPaint, [0, 0.71, 2.16]);
  addBox(root, new THREE.BoxGeometry(1.98, 0.18, 0.16), darkPaint, [0, 0.61, -2.12]);
  addBox(root, new THREE.BoxGeometry(1.73, 0.12, 0.31), bodyMaterial, [0, 1.04, -1.96]);

  for (const side of [-1, 1]) {
    const mirror = addBox(root, new THREE.BoxGeometry(0.32, 0.17, 0.29), bodyMaterial, [side * 1.04, 1.17, 0.75]);
    mirror.rotation.z = side * -0.12;
    addBox(root, new THREE.BoxGeometry(0.045, 0.26, 1.08), darkPaint, [side * 0.91, 1.3, -0.05]);
    addBox(root, new THREE.BoxGeometry(0.04, 0.22, 0.95), bodyMaterial, [side * 0.94, 1.3, -0.03]);

    const headlight = addBox(root, new THREE.BoxGeometry(0.58, 0.12, 0.055), lightMaterial, [side * 0.61, 0.88, 2.265]);
    headlight.rotation.z = side * -0.13;
    const rearLight = addBox(root, new THREE.BoxGeometry(0.59, 0.13, 0.07), tailMaterial, [side * 0.62, 0.85, -2.24]);
    rearLight.rotation.z = side * 0.1;

    const exhaust = new THREE.Mesh(
      new THREE.ConeGeometry(0.13, 0.53, 10),
      new THREE.MeshBasicMaterial({ color: 0xff8b3d, transparent: true, opacity: 0.7 }),
    );
    exhaust.rotation.x = -Math.PI / 2;
    exhaust.position.set(side * 0.48, 0.47, -2.36);
    exhaust.scale.set(1, 0.15, 1);
    exhaust.visible = false;
    root.add(exhaust);
    if (side === -1) root.userData.flameLeft = exhaust;
    else root.userData.flameRight = exhaust;

    const mirrorStem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.22, 8), darkPaint);
    mirrorStem.position.set(side * 1.02, 1.11, 0.77);
    root.add(mirrorStem);
  }

  const spoilerSupports = [-0.62, 0.62].map(x => {
    const support = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.43, 0.1), darkPaint);
    support.position.set(x, 1.23, -1.87);
    root.add(support);
    return support;
  });
  void spoilerSupports;
  const spoiler = addBox(root, new THREE.BoxGeometry(1.7, 0.13, 0.47), bodyMaterial, [0, 1.47, -1.92]);
  spoiler.rotation.x = 0.06;

  const underglow = new THREE.Mesh(
    new THREE.BoxGeometry(1.7, 0.035, 3.05),
    new THREE.MeshBasicMaterial({
      color: isPlayer ? 0x3acaff : paint,
      transparent: true,
      opacity: 0.64,
    }),
  );
  underglow.position.y = 0.38;
  root.add(underglow);

  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.2, 0.65, 12),
    new THREE.MeshBasicMaterial({
      color: 0x40caff,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  flame.rotation.x = -Math.PI / 2;
  flame.position.set(0, 0.49, -2.5);
  flame.scale.set(1, 0.1, 1);
  flame.visible = false;
  root.add(flame);

  return { root, wheels, flame };
}

function disposeCar(car: RaceCar) {
  car.root.traverse(object => {
    if (!(object instanceof THREE.Mesh)) return;
    object.geometry.dispose();
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach(material => material.dispose());
  });
}

export default function RaceStage({
  competitionId,
  playerId,
  playerName,
  initialPoints,
  onScore,
}: {
  competitionId: string;
  playerId: string;
  playerName: string;
  initialPoints: number;
  onScore: (scoreDelta: number, totalPoints: number) => void;
}) {
  const viewRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const latestRace = useRef<RaceState | null>(null);
  const lastPoints = useRef(initialPoints);
  const lastInputAt = useRef(0);
  const controls = useRef<Controls>({ accelerate: false, brake: false, steer: 0 });
  const [race, setRace] = useState<RaceState | null>(null);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(false);
  const [graphicsError, setGraphicsError] = useState("");

  useEffect(() => {
    lastPoints.current = initialPoints;
  }, [initialPoints]);

  useEffect(() => {
    const socket = io(window.location.origin, { transports: ["websocket", "polling"] });
    socketRef.current = socket;
    socket.on("connect", () => {
      setConnected(true);
      setError("");
      socket.emit("race:join", { competitionId, playerId, playerName });
    });
    socket.on("disconnect", () => setConnected(false));
    socket.on("connect_error", connectionError => {
      setConnected(false);
      setError(`Race server unavailable: ${connectionError.message}`);
    });
    socket.on("race:error", (message: string) => setError(message));
    socket.on("race:state", (nextRace: RaceState) => {
      latestRace.current = nextRace;
      setRace(nextRace);
      const myPoints = nextRace.players.find(player => player.id === playerId)?.points;
      if (typeof myPoints === "number") {
        if (myPoints > lastPoints.current) onScore(myPoints - lastPoints.current, myPoints);
        lastPoints.current = myPoints;
      }
    });
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [competitionId, onScore, playerId, playerName]);

  useEffect(() => {
    const host = viewRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    } catch (renderError) {
      const detail = renderError instanceof Error ? renderError.message : String(renderError);
      setGraphicsError(`3D graphics could not start: ${detail}`);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.setAttribute("aria-label", "Live 3D multiplayer rocket car race");
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x9bc6e5);
    scene.fog = new THREE.Fog(0x9bc6e5, 190, 540);
    const camera = new THREE.PerspectiveCamera(46, 16 / 9, 0.1, 900);
      camera.position.set(0, 3.2, 9.6);
      camera.lookAt(0, 0.8, 0);

    scene.add(new THREE.HemisphereLight(0xdcefff, 0x49563d, 2.15));
    const sunlight = new THREE.DirectionalLight(0xfff1d4, 3.1);
    sunlight.position.set(-100, 150, 75);
    sunlight.castShadow = true;
    sunlight.shadow.mapSize.set(2048, 2048);
    sunlight.shadow.camera.left = -180;
    sunlight.shadow.camera.right = 180;
    sunlight.shadow.camera.top = 180;
    sunlight.shadow.camera.bottom = -180;
    sunlight.shadow.camera.near = 10;
    sunlight.shadow.camera.far = 420;
    sunlight.shadow.bias = -0.00015;
    scene.add(sunlight);

    const track = makeTrackCurve();
    addWorld(scene, track);
    addTrackSurface(scene, track);

    const cars = new Map<string, RaceCar>();
    const clock = new THREE.Clock();
    const cameraTarget = new THREE.Vector3();
    const cameraPosition = new THREE.Vector3();
    const desiredCameraPosition = new THREE.Vector3();
    const lastRoadProgress = new Map<string, number>();
    let animationFrame = 0;
    let disposed = false;

    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const animate = () => {
      if (disposed) return;
      animationFrame = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      const state = latestRace.current;
      if (state) {
        const localPlayer = state.players.find(player => player.id === playerId);
        const relevantPlayers = state.players
          .filter(player => player.connected)
          .sort((a, b) => {
            if (a.id === playerId) return -1;
            if (b.id === playerId) return 1;
            return Math.abs(a.distance - (localPlayer?.distance ?? 0))
              - Math.abs(b.distance - (localPlayer?.distance ?? 0));
          })
          .slice(0, MAX_VISIBLE_RACERS);
        if (localPlayer && !relevantPlayers.some(player => player.id === playerId)) relevantPlayers.unshift(localPlayer);

        const visibleIds = new Set(relevantPlayers.map(player => player.id));
        for (const [id, car] of cars) {
          if (visibleIds.has(id)) continue;
          scene.remove(car.root);
          disposeCar(car);
          cars.delete(id);
          lastRoadProgress.delete(id);
        }

        for (const player of relevantPlayers) {
          let car = cars.get(player.id);
          if (!car) {
            car = createCar(player, player.id === playerId);
            cars.set(player.id, car);
            scene.add(car.root);
            const start = pointOnTrack(track, 0, player.lane);
            car.root.position.copy(start.position);
            car.root.rotation.y = Math.atan2(start.tangent.x, start.tangent.z);
          }
          const progress = player.distance / Math.max(1, state.lapDistance);
          const previousProgress = lastRoadProgress.get(player.id) ?? progress;
          const smoothedProgress = THREE.MathUtils.damp(previousProgress, progress, 7, delta);
          lastRoadProgress.set(player.id, smoothedProgress);
          const point = pointOnTrack(track, smoothedProgress, player.lane);
          const targetPosition = point.position;
          targetPosition.y = 0.02;
          car.root.position.lerp(targetPosition, 1 - Math.exp(-delta * 9));
          car.root.scale.setScalar(player.id === playerId ? 1.18 : 1.08);
          const visualSteer = THREE.MathUtils.damp(
            Number(car.root.userData.visualSteer ?? 0),
            player.steer,
            10,
            delta,
          );
          car.root.userData.visualSteer = visualSteer;
          const lateralSpeed = player.laneVelocity * 3.2;
          const slipAngle = THREE.MathUtils.clamp(
            Math.atan2(-lateralSpeed, Math.max(player.speed / 3.6, 4)),
            -0.42,
            0.42,
          );
          const targetRotation = Math.atan2(point.tangent.x, point.tangent.z) + slipAngle;
          car.root.rotation.y += Math.atan2(
            Math.sin(targetRotation - car.root.rotation.y),
            Math.cos(targetRotation - car.root.rotation.y),
          ) * (1 - Math.exp(-delta * 12));
          const targetRoll = -visualSteer * 0.09;
          car.root.rotation.z += (targetRoll - car.root.rotation.z) * (1 - Math.exp(-delta * 7));
          car.wheels.forEach(wheel => {
            wheel.spinPivot.rotation.x -= (player.speed / 3.6) * delta / 0.49;
            wheel.steeringPivot.rotation.y = wheel.isFront ? -visualSteer * 0.38 : 0;
          });
          const boost = player.speed > 105;
          car.flame.visible = boost;
          car.flame.scale.y = boost ? 0.34 + Math.random() * 0.48 : 0.1;
          for (const exhaust of [car.root.userData.flameLeft, car.root.userData.flameRight] as THREE.Mesh[]) {
            exhaust.visible = player.speed > 180;
            exhaust.scale.y = exhaust.visible ? 0.2 + Math.random() * 0.3 : 0.1;
          }
        }

        const playerCar = cars.get(playerId);
        const playerState = localPlayer;
        if (playerCar && playerState) {
          const playerProgress = lastRoadProgress.get(playerId) ?? 0;
          const ahead = pointOnTrack(track, playerProgress + 0.012);
          const tangent = ahead.tangent;
          const followDistance = 7.2;
          desiredCameraPosition.copy(playerCar.root.position)
            .addScaledVector(tangent, -followDistance)
            .add(new THREE.Vector3(0, 2.7 + Math.min(1.8, playerState.speed * 0.012), 0));
          cameraPosition.lerp(desiredCameraPosition, 1 - Math.exp(-delta * 3.4));
          camera.position.copy(cameraPosition);
          cameraTarget.copy(playerCar.root.position)
            .addScaledVector(tangent, 7)
            .add(new THREE.Vector3(0, 1.1, 0));
          camera.lookAt(cameraTarget);
          const targetFov = 42 + Math.min(10, playerState.speed * 0.08);
          camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-delta * 2.2));
          camera.updateProjectionMatrix();
        }
      }
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      for (const car of cars.values()) disposeCar(car);
      cars.clear();
      scene.traverse(object => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach(material => material.dispose());
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [playerId]);

  useEffect(() => {
    const sendControls = (next: Controls) => {
      controls.current = next;
      const now = Date.now();
      if (now - lastInputAt.current >= 35) {
        socketRef.current?.emit("race:input", next);
        lastInputAt.current = now;
      }
    };
    const keyChange = (event: KeyboardEvent, down: boolean) => {
      const { code } = event;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD", "Space"].includes(code)) return;
      event.preventDefault();
      const current = controls.current;
      sendControls({
        accelerate: code === "ArrowUp" || code === "KeyW" || code === "Space" ? down : current.accelerate,
        brake: code === "ArrowDown" || code === "KeyS" ? down : current.brake,
        steer: (() => {
          const steerDirection = code === "ArrowLeft" ? -1
            : code === "ArrowRight" ? 1
              : code === "KeyA" ? -1
                : code === "KeyD" ? 1
                  : null;
          if (steerDirection === null) return current.steer;
          return down ? steerDirection : current.steer === steerDirection ? 0 : current.steer;
        })(),
      });
    };
    const releaseControls = () => sendControls({ accelerate: false, brake: false, steer: 0 });
    const keyDown = (event: KeyboardEvent) => keyChange(event, true);
    const keyUp = (event: KeyboardEvent) => keyChange(event, false);
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    window.addEventListener("blur", releaseControls);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
      window.removeEventListener("blur", releaseControls);
    };
  }, []);

  const me = race?.players.find(player => player.id === playerId);
  const leaders = race?.players
    .slice()
    .sort((a, b) => b.distance - a.distance || b.points - a.points)
    .slice(0, 3) ?? [];
  const currentLap = Math.min(race?.totalLaps ?? 3, Math.floor((me?.distance ?? 0) / Math.max(1, race?.lapDistance ?? 1)) + 1);
  const phaseText = !race
    ? "Joining the grid"
    : race.phase === "countdown"
      ? `Round ${race.round} · lights in ${Math.max(1, Math.ceil((race.phaseEndsAt - Date.now()) / 1000))}`
      : race.phase === "results"
        ? `Round ${race.round} complete · next grid forming`
        : `Round ${race.round} · ${Math.round(me?.speed ?? 0)} km/h`;

  return <div>
    <div className="top sm mut" style={{ marginBottom: 8 }}>
      <span>{connected ? `Live grid · ${race?.players.length ?? 1}/${race?.maxPlayers ?? 4} racers` : "Connecting to multiplayer race…"}</span>
      <span>Your race points: {me?.points ?? initialPoints}</span>
    </div>
    <div
      className="gw"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: 0,
        background: "#111b24",
        border: "1px solid rgba(191,222,255,.26)",
        borderRadius: 16,
        boxShadow: "0 24px 70px rgba(0,0,0,.42), inset 0 1px rgba(255,255,255,.12)",
      }}
    >
      <div ref={viewRef} style={{ width: "100%", aspectRatio: "16 / 9", minHeight: 300 }} />
      <div style={{
        position: "absolute",
        inset: "14px 14px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 12,
        pointerEvents: "none",
      }}>
        <div style={{
          padding: "10px 14px",
          borderRadius: 12,
          color: "white",
          background: "rgba(8,16,25,.72)",
          border: "1px solid rgba(255,255,255,.17)",
          backdropFilter: "blur(10px)",
          textShadow: "0 1px 8px #000",
        }}>
          <div style={{ fontWeight: 850, letterSpacing: ".08em", fontSize: 13 }}>ROCKET GRAND PRIX</div>
          <div className="sm" style={{ opacity: 0.86 }}>{phaseText}</div>
        </div>
        <div style={{
          padding: "10px 14px",
          borderRadius: 12,
          color: "white",
          textAlign: "right",
          background: "rgba(8,16,25,.72)",
          border: "1px solid rgba(255,255,255,.17)",
          backdropFilter: "blur(10px)",
        }}>
          <div style={{ fontSize: 24, fontWeight: 900, fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
            {Math.round(me?.speed ?? 0)} <small style={{ fontSize: 11, fontWeight: 700 }}>KM/H</small>
          </div>
          <div
            role="meter"
            aria-label="Live vehicle speed"
            aria-valuemin={0}
            aria-valuemax={MAX_SPEED_KMH}
            aria-valuenow={Math.round(me?.speed ?? 0)}
            style={{ width: 92, height: 5, marginTop: 7, borderRadius: 5, background: "rgba(255,255,255,.22)", overflow: "hidden" }}
          >
            <div style={{
              width: `${Math.min(100, Math.max(0, ((me?.speed ?? 0) / MAX_SPEED_KMH) * 100))}%`,
              height: "100%",
              background: "linear-gradient(90deg, #38d99a, #ffd45c, #ff625e)",
              transition: "width 100ms linear",
            }} />
          </div>
          <div className="sm" style={{ opacity: 0.78 }}>LAP {me?.finished ? race?.totalLaps : currentLap}/{race?.totalLaps ?? 3}</div>
        </div>
      </div>
      {leaders.length > 0 && <div style={{
        position: "absolute",
        left: 14,
        bottom: 14,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "9px 12px",
        borderRadius: 11,
        color: "white",
        background: "rgba(8,16,25,.68)",
        border: "1px solid rgba(255,255,255,.14)",
        fontSize: 12,
        pointerEvents: "none",
      }}>
        {leaders.map((leader, index) => <div key={leader.id} style={{ fontWeight: leader.id === playerId ? 800 : 500 }}>
          <span style={{ opacity: 0.65 }}>0{index + 1}</span>&nbsp; {leader.name}{leader.id === playerId ? " · YOU" : ""}&nbsp;
          <span style={{ opacity: 0.76 }}>{leader.finished ? `FIN ${leader.place}` : `L${leader.lap}`} · {leader.points} pts</span>
        </div>)}
      </div>}
      {race?.phase === "countdown" && Math.ceil((race.phaseEndsAt - Date.now()) / 1000) <= 4 && <div style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "clamp(48px, 10vw, 104px)",
        lineHeight: 1,
        fontWeight: 950,
        fontStyle: "italic",
        textShadow: "0 5px 28px rgba(0,0,0,.8)",
        pointerEvents: "none",
      }}>{Math.max(1, Math.ceil((race.phaseEndsAt - Date.now()) / 1000))}</div>}
    </div>
    {(error || graphicsError) && <div className="note form-error sm" role="alert">{graphicsError || error}</div>}
    <p className="sm mut">Race three laps against up to three other drivers. Grids hold at most four racers; players arriving during a race are placed in the next grid. Build speed, brake for corners, and steer to hold your line. Drafting can help you close a gap; going wide costs speed. Hold W / ↑ / Space to accelerate, S / ↓ to brake, and A/D or ←/→ to steer.</p>
  </div>;
}
