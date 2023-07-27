import { Image, Text, OrbitControls, Center, PerspectiveCamera} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import '../stylesheets/navbar.css'
import '../stylesheets/about.css'
import '../three/ImageCubes'
import ImageCubes from '../three/ImageCubes'
import Placeholder from '../three/Placeholder'


export default function AboutImage() {



  return <>
      <div className='small-canvas'>
        <Canvas frameloop='demand'>
          <PerspectiveCamera position={[0, 0, 0]} />
          <OrbitControls autoRotate autoRotateSpeed={.5} />
          <ambientLight intensity={.5} />

          <Suspense fallback={<Placeholder scale={1.5} position={[0, 0, 0]} rotation={[0, .6, 0]} />}>
            <Center>
              <ImageCubes />
            </Center>
          </Suspense>

        </Canvas>
      </div>

  </>
}
