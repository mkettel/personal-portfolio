import { Image, Text, OrbitControls, SpotLight, Center} from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useRef, useState, useEffect } from 'react'
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

    // Image Scale State and Function
    const [imageScale, setImageScale] = useState(1.6)

    useEffect(() => {
      function handleResize() {
        const { innerWidth } = window;
        const isMobile = innerWidth <= 768; // Adjust the breakpoint for mobile devices
        const scale = isMobile ? .9 : 1.6; // Adjust the scale values for mobile
        setImageScale(scale);
      }

      window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return <>


      {/* <Center> */}
        <group scale={imageScale} rotation={[0, .7, 0]} ref={groupRef} position={[0, 0, 0]}>

          {/* Bottom Image */}
          <mesh  position={[0, -1, -1]} rotation={[Math.PI / 2, 0, 0]}>
            {/* <boxGeometry args={[2, 2, .05]} /> */}
            <meshStandardMaterial map={dino} />
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/bali-dino.jpg'} />
          </mesh>

          {/* Front Image */}
            <mesh position={[0, 0, 0.01]} rotation={[0, 0, 0]} >
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
      {/* </Center> */}


  </>
}
