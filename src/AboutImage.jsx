import { Image, Text, OrbitControls} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import './stylesheets/navbar.css'


export default function AboutImage() {

  // Textures can be used but not a must and results in a loss of color
  const [ baliMe ] = useLoader(TextureLoader, [
    './images/me_lol.jpg'
  ])

  return <>
      <div className='small-canvas'>
        <Canvas>
        <OrbitControls />
        <ambientLight intensity={.5} />

        <mesh position={[0, 0, 0]} >
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial map={baliMe} />
          {/* <Image raycast={() => null} scale={[4.5, 4, 1]} position={[0, 0, 0.15]} side={THREE.DoubleSide} url={'./images/me_lol.jpg'} /> */}
        </mesh>

        </Canvas>
      </div>

  </>
}
