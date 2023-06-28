import { Image, Text, OrbitControls, SpotLight, Center} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useRef } from 'react'
import * as THREE from 'three'



export default function ImageCubes() {

    // Textures can be used but not a must and results in a loss of color
    const [ baliMe, meSki, nameTexture, dino, centralPark, skiSlash, backie ] = useLoader(TextureLoader, [
      './images/me_lol.jpg',
      './images/me-ski.JPG',
      './images/name-texture.png',
      './images/bali-dino.jpg',
      './images/central-park.jpg',
      './images/ski-slash.JPEG',
      './images/backie.JPG'
    ])

    // left image ref
    const groupRef = useRef()
    const imageMiddleRef = useRef()

    useFrame(() => {
      groupRef.current.rotation.y += 0.0009;
      groupRef.current.rotation.x += 0.0008;
      // groupRef.current.rotation.z += 0.001;

    })

  return <>

      <Center>
        <group scale={1.6} rotation={[0, .4, 0]} ref={groupRef} position={[0, 0, 0]}>

          {/* Bottom Image */}
          <mesh  position={[0, -1, -1]} rotation={[Math.PI / 2, 0, 0]}>
            {/* <boxGeometry args={[2, 2, .05]} /> */}
            <meshStandardMaterial map={dino} />
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/bali-dino.jpg'} />
          </mesh>

          {/* Front Image */}
            <mesh ref={imageMiddleRef} position={[0, 0, 0.01]} rotation={[0, 0, 0]} >
            {/* <boxGeometry args={[2, 2, .05]} /> */}
            <meshStandardMaterial map={meSki} />
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/me-ski.JPG'} />
            </mesh>

          {/* Left Side Image */}
          <mesh  position={[-1.01, 0, -1]} rotation={[0, -Math.PI / 2, 0]}>
            {/* <boxGeometry args={[2, 2, .05]} /> */}
            <meshStandardMaterial map={baliMe} />
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/me_lol.jpg'} />
          </mesh>

          {/* Right Side Image */}
          <mesh  position={[1.01, 0, -1]} rotation={[0, Math.PI / 2, 0]}>
            {/* <boxGeometry args={[2, 2, .05]} /> */}
            <meshStandardMaterial map={centralPark} />
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/central-park.jpg'} />
          </mesh>

          {/* Top Side Image */}
          <mesh  position={[0, 1.01, -1]} rotation={[ -Math.PI / 2 , 0, 0]}>
            {/* <boxGeometry args={[2, 2, .05]} /> */}
            <meshStandardMaterial map={skiSlash} />
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/ski-slash.JPEG'} />
          </mesh>

          {/* Back Side Image */}
          <mesh  position={[0, 0, -2.01]} rotation={[ Math.PI, 0, Math.PI ]}>
            {/* <boxGeometry args={[2, 2, .05]} /> */}
            <meshStandardMaterial map={backie} />
            <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/backie.JPG'} />
          </mesh>

        </group>
      </Center>


  </>
}
