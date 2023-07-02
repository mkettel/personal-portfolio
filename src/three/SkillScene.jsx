import { Image, TorusKnot, MeshTransmissionMaterial, MeshWobbleMaterial, Dodecahedron, Html, PresentationControls } from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'


export default function SkillScene() {


  return <>



    <Html castShadow receiveShadow occlude="blending" position={[-6, 0, 0]} transform>
      <iframe title="embed" width={500} height={400} src="https://surf-shop-zeta.vercel.app/" frameBorder={0} />
    </Html>
    <Html castShadow receiveShadow occlude="blending" position={[8, 0, 0]} transform>
      <iframe title="embed" width={500} height={400} src="https://homebase-mkettel.vercel.app/" frameBorder={0} />
    </Html>




  </>
}
