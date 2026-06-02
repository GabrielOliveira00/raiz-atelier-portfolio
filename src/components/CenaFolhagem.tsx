import { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import {
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  PointLight,
  Scene,
  StandardMaterial,
  TransformNode,
  Vector3,
} from "@babylonjs/core";

type CenaFolhagemProps = {
  scrollProgress: MotionValue<number>;
  brisaToken: number;
};

type FolhaSolta = {
  mesh: Mesh;
  phase: number;
  radius: number;
  height: number;
  speed: number;
};

export function CenaFolhagem({ scrollProgress, brisaToken }: CenaFolhagemProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollRef = useRef(0);
  const tokenRef = useRef(brisaToken);
  const ventoRef = useRef(0);

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    scrollRef.current = latest;
  });

  useEffect(() => {
    if (tokenRef.current !== brisaToken) {
      tokenRef.current = brisaToken;
      ventoRef.current = 1.5;
    }
  }, [brisaToken]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const engine = new Engine(canvas, true, {
      antialias: true,
      preserveDrawingBuffer: true,
      stencil: true,
    });

    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0);

    const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.42, 16.8, Vector3.Zero(), scene);
    camera.inputs.clear();
    camera.fov = 0.86;

    const hemi = new HemisphericLight("hemi", new Vector3(0, 1, 0), scene);
    hemi.intensity = 1.1;
    hemi.diffuse = new Color3(0.78, 0.88, 0.76);

    const point = new PointLight("point", new Vector3(-2, 4, 5), scene);
    point.intensity = 30;
    point.diffuse = new Color3(0.58, 0.72, 0.49);

    const fill = new PointLight("fill", new Vector3(4, 2, -3), scene);
    fill.intensity = 14;
    fill.diffuse = new Color3(0.48, 0.62, 0.44);

    const parent = new TransformNode("folhagem-root", scene);
    parent.position.y = -0.6;

    const ramo = new TransformNode("ramo-root", scene);
    ramo.parent = parent;

    const ramoMaterial = new StandardMaterial("ramo-material", scene);
    ramoMaterial.diffuseColor = new Color3(0.39, 0.3, 0.25);
    ramoMaterial.emissiveColor = new Color3(0.08, 0.05, 0.04);

    const folhaMaterialA = new StandardMaterial("folha-a", scene);
    folhaMaterialA.diffuseColor = new Color3(0.48, 0.58, 0.42);
    folhaMaterialA.emissiveColor = new Color3(0.1, 0.18, 0.1);
    folhaMaterialA.specularColor = new Color3(0.22, 0.28, 0.18);

    const folhaMaterialB = new StandardMaterial("folha-b", scene);
    folhaMaterialB.diffuseColor = new Color3(0.57, 0.67, 0.5);
    folhaMaterialB.emissiveColor = new Color3(0.12, 0.16, 0.1);
    folhaMaterialB.specularColor = new Color3(0.24, 0.28, 0.18);

    const sementeMaterial = new StandardMaterial("semente", scene);
    sementeMaterial.diffuseColor = new Color3(0.67, 0.46, 0.33);
    sementeMaterial.emissiveColor = new Color3(0.09, 0.05, 0.04);

    const tronco = MeshBuilder.CreateCylinder("tronco", { diameterTop: 0.18, diameterBottom: 0.34, height: 8 }, scene);
    tronco.material = ramoMaterial;
    tronco.parent = ramo;
    tronco.position.y = 0.8;
    tronco.rotation.z = Math.PI / 9;

    const galho = MeshBuilder.CreateCylinder("galho", { diameterTop: 0.08, diameterBottom: 0.15, height: 4.8 }, scene);
    galho.material = ramoMaterial;
    galho.parent = ramo;
    galho.position.set(1.4, 2.2, -0.4);
    galho.rotation.z = -Math.PI / 3.6;
    galho.rotation.x = Math.PI / 8;

    const galho2 = MeshBuilder.CreateCylinder("galho-2", { diameterTop: 0.07, diameterBottom: 0.12, height: 4.2 }, scene);
    galho2.material = ramoMaterial;
    galho2.parent = ramo;
    galho2.position.set(-1.3, 2.8, 0.2);
    galho2.rotation.z = Math.PI / 2.9;
    galho2.rotation.x = -Math.PI / 10;

    const folhasSoltas: FolhaSolta[] = [];

    for (let index = 0; index < 28; index += 1) {
      const folha = MeshBuilder.CreateDisc(`folha-${index}`, { radius: 0.48 + (index % 4) * 0.07, tessellation: 18 }, scene);
      folha.scaling.x = 0.72;
      folha.scaling.y = 1.36 + (index % 3) * 0.18;
      folha.material = index % 2 === 0 ? folhaMaterialA : folhaMaterialB;
      folha.parent = parent;

      folhasSoltas.push({
        mesh: folha,
        phase: index * 0.58,
        radius: 5.4 + (index % 5) * 1.05,
        height: -2.6 + (index % 6) * 0.98,
        speed: 0.75 + (index % 4) * 0.1,
      });
    }

    const sementes: Mesh[] = [];

    for (let index = 0; index < 28; index += 1) {
      const semente = MeshBuilder.CreateSphere(`semente-${index}`, { diameter: 0.08 + (index % 3) * 0.03, segments: 10 }, scene);
      semente.material = sementeMaterial;
      semente.parent = parent;
      sementes.push(semente);
    }

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    function onMove(event: MouseEvent) {
      pointer.tx = event.clientX / window.innerWidth - 0.5;
      pointer.ty = event.clientY / window.innerHeight - 0.5;
    }

    window.addEventListener("mousemove", onMove);
    const resize = () => engine.resize();
    window.addEventListener("resize", resize);

    engine.runRenderLoop(() => {
      const time = performance.now() * 0.00028;
      const scroll = scrollRef.current;

      pointer.x += (pointer.tx - pointer.x) * 0.03;
      pointer.y += (pointer.ty - pointer.y) * 0.03;
      ventoRef.current += (0 - ventoRef.current) * 0.025;

      camera.alpha = Math.PI / 2 + pointer.x * 0.32 + scroll * 0.1;
      camera.beta = Math.PI / 2.44 + pointer.y * 0.12;
      camera.radius = 16.8 - scroll * 1.8 - ventoRef.current * 0.45;

      parent.rotation.y = pointer.x * 0.14 + Math.sin(time * 0.8) * 0.08;
      ramo.rotation.z = Math.PI / 9 + Math.sin(time * 2 + scroll * 3) * 0.08 + ventoRef.current * 0.05;
      galho.rotation.z = -Math.PI / 3.6 + Math.sin(time * 2.6) * 0.12;
      galho2.rotation.z = Math.PI / 2.9 + Math.cos(time * 2.1) * 0.1;

      folhasSoltas.forEach((folha, index) => {
        const orbit = time * folha.speed + folha.phase;
        folha.mesh.position.x = Math.cos(orbit) * folha.radius + pointer.x * 1.4;
        folha.mesh.position.z = Math.sin(orbit) * folha.radius * 0.72;
        folha.mesh.position.y = folha.height + Math.sin(orbit * 1.8) * 0.8 + scroll * 0.95;
        folha.mesh.rotation.z = Math.sin(orbit * 2.6) * 0.78 + ventoRef.current * 0.14;
        folha.mesh.rotation.x = Math.cos(orbit * 1.6 + index) * 0.35;
        folha.mesh.rotation.y += 0.003 + index * 0.00008;
      });

      sementes.forEach((semente, index) => {
        const orbit = time * (0.6 + (index % 5) * 0.08) + index;
        semente.position.x = Math.sin(orbit) * (3.5 + (index % 4) * 0.8);
        semente.position.z = Math.cos(orbit * 1.2) * (1.5 + (index % 3) * 0.5);
        semente.position.y = -1.8 + (index % 8) * 0.5 + Math.sin(orbit * 2.4) * 0.3 + scroll * 0.6;
      });

      scene.render();
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      scene.dispose();
      engine.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full opacity-100" aria-hidden />;
}
