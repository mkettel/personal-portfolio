import { Preload, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'
import '../stylesheets/navbar.css'
import '../stylesheets/about.css'
import '../stylesheets/skills.css'
import SkillScene from '../three/SkillScene'
import { Three } from '../Homepage'
import Placeholder from '../three/Placeholder'


export default function SkillComponent() {

  return <>
    <div className='small-canvas'>
        <Canvas>
          {/* <color attach="background" args={['black']} /> */}
          <PerspectiveCamera position={[-1, 0, -8]} >
          {/* <OrbitControls /> */}
          {/* <ambientLight intensity={1}  /> */}
          <directionalLight position={[2, 0, 0]} intensity={2} color='#FB62F6' />
          <directionalLight position={[-2, 0, 0]} intensity={2} />

          {/* <Sky distance={450000} sunPosition={[0, -1, 0]} inclination={0} azimuth={0.25} /> */}
          <Suspense fallback={<Placeholder scale={3} position={[0, 0, 0]} rotation={[0, .6, 0]} />}>
            <SkillScene />
          </Suspense>

          </PerspectiveCamera>
          {/* <Preload all /> */}
        </Canvas>
      </div>
  </>
}
