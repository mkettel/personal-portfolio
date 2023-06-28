import { Image, Text, OrbitControls} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useRef } from 'react'
import * as THREE from 'three'
import './stylesheets/navbar.css'
import './stylesheets/about.css'
import './three/ImageCubes'
import ImageCubes from './three/ImageCubes'


export default function AboutImage() {



  return <>
      <div className='small-canvas'>
        <Canvas>
        <OrbitControls />
        <ambientLight intensity={.5} />

        <ImageCubes />

        </Canvas>
      </div>

  </>
}
