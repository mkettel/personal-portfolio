import { Image } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'


export default function ImageCubes() {

    // Cube ref
    const groupRef = useRef()

    // Image Scale State and Function
    const [imageScale, setImageScale] = useState(1.6)
    const [imagePosition, setImagePosition] = useState([0, 0, 0])

    useEffect(() => {
      function handleResize() {
        const { innerWidth } = window;
        const isMobile = innerWidth <= 768; // Adjust the breakpoint for mobile devices
        const scale = isMobile ? 1 : 1.8; // Adjust the scale values for mobile
        const position = isMobile ? [0, -.5, -.5] : [0, 0.1, 0]
        setImageScale(scale);
        setImagePosition(position);
        console.log(groupRef.current);
      }
      window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // Hover state for cube
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    console.log(document.body.style.cursor = hovered ? 'pointer !important' : 'auto'
    );
  }, [hovered]);

  return <>
        <group scale={imageScale} rotation={[0, .7, 0]} ref={groupRef} position={imagePosition} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} >

          {/* Bottom Image */}
          <mesh position={[0, -1, -1]} rotation={[Math.PI / 2, 0, 0]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} >
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/bali-dino-comp.webp'}  />
          </mesh>

          {/* Front Image */}
            <mesh position={[0, 0, 0.01]} rotation={[0, 0, 0]} >
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/me-ski-comp.webp'} />
            </mesh>

          {/* Left Side Image */}
          <mesh  position={[-1.01, 0, -1]} rotation={[0, -Math.PI / 2, 0]}>
              <Image raycast={() => null} scale={[2, 2, 1]} transparent side={THREE.DoubleSide} url={'./images/me_lol-comp.webp'} />
          </mesh>

          {/* Right Side Image */}
          <mesh  position={[1.01, 0, -1]} rotation={[0, Math.PI / 2, 0]}>
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/central-park-comp.webp'} />
          </mesh>

          {/* Top Side Image */}
          <mesh  position={[0, 1.01, -1]} rotation={[ -Math.PI / 2 , 0, 0]}>
              <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/ski-slash-comp.webp'} />
          </mesh>

          {/* Back Side Image */}
          <mesh  position={[0, 0, -2.01]} rotation={[ Math.PI, 0, Math.PI ]}>
            <Image raycast={() => null} scale={[2, 2, 1]} side={THREE.DoubleSide} url={'./images/backie-comp.webp'} />
          </mesh>
        </group>
  </>
}
