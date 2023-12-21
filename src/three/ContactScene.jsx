import { TorusKnot, Float, Lightformer, Environment, MeshTransmissionMaterial, MeshWobbleMaterial, Html, PresentationControls, Text3D } from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense, useState, useEffect } from 'react'
import * as THREE from 'three'


export default function ContactScene() {

  const knot = useRef();

  useFrame(() => {
    knot.current.rotation.y += .002
    knot.current.rotation.x += .0009
    knot.current.rotation.z += .002
  })

  return <>

    <ambientLight intensity={1} />
    <directionalLight intensity={1} />

    <group ref={knot}>
    <TorusKnot  scale={1.8} position={[3, 0, 0]} >
      {/* <MeshWobbleMaterial color={'yellow'} /> */}
      <meshPhongMaterial color="black" wireframe />
    </TorusKnot>
    </group>

  </>
}
