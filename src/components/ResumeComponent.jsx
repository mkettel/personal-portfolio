import { useRef, useState } from 'react'
import { OrbitControls, Center, TorusKnot, Float, Lightformer, Environment, MeshTransmissionMaterial, MeshWobbleMaterial, Html, PresentationControls, Text3D, PerspectiveCamera } from '@react-three/drei'
import '../stylesheets/contact.css'
import '../stylesheets/resume.css'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'


export default function ResumeComponent() {

  return <>


      <div className='resume-canvas'>
        <Canvas>
          <PerspectiveCamera position={[0, 0, -4]} >
        {/* <OrbitControls /> */}
        <ambientLight intensity={.8} />
          {/* <Center> */}
            <Html castShadow receiveShadow occlude="blending" position={[0, -.2, 0]} transform>
              <iframe className='scene' title="embed" width={1185} height={500} src="https://3d-resume-six.vercel.app/" frameBorder={0} />
            </Html>
          {/* </Center> */}
          </PerspectiveCamera>

        </Canvas>
      </div>


  </>
}
