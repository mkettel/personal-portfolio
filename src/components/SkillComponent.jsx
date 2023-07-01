import { Image, Text, OrbitControls, Center, PerspectiveCamera} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import '../stylesheets/navbar.css'
import '../stylesheets/about.css'


export default function SkillComponent() {

  return <>
    <div className='small-canvas'>
        <Canvas>
          <PerspectiveCamera position={[0, 0, 0]} />
          <OrbitControls />
          <ambientLight intensity={.5} />

          <mesh>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>

        </Canvas>
      </div>
  </>
}
