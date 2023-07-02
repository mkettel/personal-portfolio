import { Image, Text, OrbitControls, Center, PerspectiveCamera, Sky, Environment} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import '../stylesheets/navbar.css'
import '../stylesheets/about.css'
import '../stylesheets/skills.css'
import SkillScene from '../three/SkillScene'


export default function SkillComponent() {

  return <>
    <div className='small-canvas'>
        <Canvas>
          <PerspectiveCamera position={[0, 0, -2]} >
          <OrbitControls />
          <ambientLight intensity={.2} />
          <directionalLight position={[-2, 2, 5]} intensity={1}/>

          {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
          <Environment preset="sunset" />

          <SkillScene />
          </PerspectiveCamera>
        </Canvas>
      </div>
  </>
}
