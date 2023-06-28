import { Image, Text, OrbitControls} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import './stylesheets/navbar.css'
import './stylesheets/about.css'


export default function AboutImage() {

  // Textures can be used but not a must and results in a loss of color
  const [ baliMe, meSki ] = useLoader(TextureLoader, [
    './images/me_lol.jpg',
    './images/me-ski.JPG'
  ])

  return <>
      <div className='small-canvas'>
        <Canvas>
        <OrbitControls />
        <ambientLight intensity={.5} />

        <group position={[0, -0.2, 0]}>

          <mesh position={[-3, 0, 0]} >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial map={baliMe} />
              {/* <Image raycast={() => null} scale={[3.5, 3, 1]} position={[0, 0, 0.15]} side={THREE.DoubleSide} url={'./images/me_lol.jpg'} /> */}
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial map={meSki} />
              {/* <Image raycast={() => null} scale={[3.5, 3, 1]} position={[0, 0, 0.15]} side={THREE.DoubleSide} url={'./images/me-ski.JPG'} /> */}
          </mesh>

        </group>


        </Canvas>
      </div>

  </>
}
