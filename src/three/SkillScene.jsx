import { Image, MeshPortalMaterial, Environment, MeshTransmissionMaterial, MeshWobbleMaterial, Html, PresentationControls } from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'


export default function SkillScene() {


  return <>



    {/* <Html castShadow receiveShadow occlude="blending" position={[-6, 0, 0]} transform>
      <iframe title="embed" width={500} height={400} src="https://surf-shop-zeta.vercel.app/" frameBorder={0} />
    </Html> */}



    <mesh>
      <boxGeometry args={[5, 5, 5]} />
      <MeshPortalMaterial side={THREE.DoubleSide}>
        <color attach="background" args={['#d1d1ca']} />
        <mesh position={[0, 0, -5]}>
          <sphereGeometry />
          <meshBasicMaterial />
          <Environment preset='night' background blur={0}/>
        </mesh>

      </MeshPortalMaterial>
    </mesh>
  </>
}
