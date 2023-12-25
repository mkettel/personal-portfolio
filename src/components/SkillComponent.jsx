import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
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
          <Suspense fallback={<Placeholder scale={3} position={[0, 0, 0]} rotation={[0, .6, 0]} />}>
            <SkillScene />
            <AccumulativeShadows temporal frames={100} color="#EEDFCB" colorBlend={2} opacity={0.9} scale={90} position={[0, -5, 1]}>
              <RandomizedLight amount={8} radius={15} ambient={0.5} intensity={1} position={[7, 10, -5]} size={90} />
            </AccumulativeShadows>
          </Suspense>
        </Canvas>
      </div>
  </>
}
