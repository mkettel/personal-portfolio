import { Preload, PerspectiveCamera, Sky, Environment, PresentationControls, MeshReflectorMaterial} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
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
          {/* <color attach="background" args={['#6F2632']} /> */}
          <PerspectiveCamera position={[-1, 0, -8]} >
          {/* <OrbitControls /> */}
          <ambientLight intensity={.2} />


          {/* <Sky distance={450000} sunPosition={[0, -1, 0]} inclination={0} azimuth={0.25} /> */}
          <Suspense fallback={<Placeholder scale={3} position={[0, 0, 0]} rotation={[0, .6, 0]} />}>
            <SkillScene />
          </Suspense>

          </PerspectiveCamera>
          <Preload all />
        </Canvas>
      </div>
  </>
}
