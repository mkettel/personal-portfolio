import { Preload, PerspectiveCamera, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
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
    <div className='small-canvas-about'>
        <Canvas shadows camera={{ position: [6, 0, 20], fov: 47, near: 1, far: 50 }}>
          <color attach="background" args={['#1a151c']} />
          {/* <PerspectiveCamera position={[-1, 0, -8]} > */}
          {/* <OrbitControls /> */}
          {/* <directionalLight position={[0, 1, 0]} intensity={2} color='#FB62F6' /> */}
          {/* <directionalLight position={[-2, 0, 0]} intensity={2} /> */}

          {/* <Sky distance={450000} sunPosition={[0, -1, 0]} inclination={0} azimuth={0.25} /> */}
          <Suspense fallback={<Placeholder scale={3} position={[0, 0, 0]} rotation={[0, .6, 0]} />}>
            <SkillScene />
            <AccumulativeShadows temporal frames={100} color="#EEDFCB" colorBlend={2} opacity={0.9} scale={90} position={[0, -5, 1]}>
              <RandomizedLight amount={8} radius={15} ambient={0.5} intensity={1} position={[7, 10, -5]} size={90} />
            </AccumulativeShadows>
          </Suspense>

          {/* </PerspectiveCamera> */}
          {/* <Preload all /> */}
        </Canvas>
      </div>
  </>
}
