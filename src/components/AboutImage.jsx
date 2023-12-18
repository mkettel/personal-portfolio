import { Image, Text, OrbitControls, Center, PerspectiveCamera} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import '../stylesheets/navbar.css'
import '../stylesheets/about.css'
import '../three/ImageCubes'
import ImageCubes from '../three/ImageCubes'
import Placeholder from '../three/Placeholder'
import AbstractShape from '../three/AbstractShape'

export default function AboutImage() {



  return <>
      <div className='small-canvas-about'>
        <Canvas frameloop='demand' orthographic camera={{ position: [10, 20, 20], zoom: 80 }}>
          {/* <PerspectiveCamera position={[0, 0, 0]} /> */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={.55}
            minZoom={70}
            maxZoom={110}
            enablePan={true}
            dampingFactor={0.05}
          />
          <ambientLight intensity={.4} />

          <Suspense fallback={<Placeholder scale={1.5} position={[0, 0, 0]} rotation={[0, .6, 0]} />}>
            <Center>
              <ImageCubes />
            </Center>
            <AbstractShape count={4000} shape="box" />
          </Suspense>

        </Canvas>
      </div>

  </>
}
