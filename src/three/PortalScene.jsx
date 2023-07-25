import { TorusKnot, Float, Lightformer, Environment, MeshTransmissionMaterial, MeshWobbleMaterial, Html, PresentationControls, Text3D } from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense, useState, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { MathUtils } from "three";
import { Color } from "three";
import fragmentShader from '../shaders/portalFragmentShader'
import vertexShader from '../shaders/portalVertexShader'
import '../stylesheets/portal.css'


export default function PortalScene() {

  const mesh = useRef();
  const hover = useRef(false);

  // Uniforms Variables
  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  // Movement
  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.2 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    );
  });


  return <>

    <ambientLight intensity={1} />
    <directionalLight intensity={1} />

    <mesh
      ref={mesh}
      scale={1}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
      >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>

  </>
}
