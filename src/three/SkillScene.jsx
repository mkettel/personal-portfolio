import { OrbitControls, Float, Lightformer, Environment, MeshTransmissionMaterial, MeshWobbleMaterial, Html, PresentationControls, Text3D, RoundedBox, Center } from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense, useState, useEffect } from 'react'
import * as THREE from 'three'


export default function SkillScene() {

  const latoBold = './fonts/lato-bold.json'
    // left image ref
    const groupRef = useRef()

    // Image Scale State and Function
    const [cubeScale, setCubeScale] = useState(1)
    const [cubePosition, setCubePosition] = useState([0, 0, -1])

    useEffect(() => {
      function handleResize() {
        const { innerWidth } = window;
        const isMobile = innerWidth <= 768; // Adjust the breakpoint for mobile devices
        const scale = isMobile ? 1.4 : 1.9; // Adjust the scale values for mobile
        const position = isMobile ? [1, 0, -1] : [-1.5, 0, -1]
        setCubeScale(scale);
        setCubePosition(position);
      }

      window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cube = useRef();




  return <>

    {/* <Html castShadow receiveShadow occlude="blending" position={[-6, 0, 0]} transform>
      <iframe title="embed" width={500} height={400} src="https://surf-shop-zeta.vercel.app/" frameBorder={0} />
    </Html> */}
    <ambientLight intensity={3} />

    {/* Presentation Controls */}
    <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={false} // Snap-back to center (can also be a spring config)
      speed={.5} // Speed factor
      zoom={1} // Zoom factor when half the polar-max is reached
      rotation={[.1, 0, 0]} // Default rotation
      polar={[0, Math.PI / 2]} // Vertical limits
      azimuth={[-Infinity, Infinity]} // Horizontal limits
      config={{ mass: 1, tension: 170, friction: 20 }} // Spring config
      >

      {/* Cube Group */}
      <Float ref={cube} speed={1} rotationIntensity={1.9}  floatingRange={[-1, 1]}>
        <group ref={cube} position={cubePosition} scale={cubeScale} >

          <mesh castShadow receiveShadow position={[0, 0, 0]} >
            <RoundedBox args={[9, 5, 5]} castShadow receiveShadow radius={.5} >
              <MeshTransmissionMaterial backside
                  samples={4}
                  thickness={3}
                  chromaticAberration={0.03}
                  anisotropy={0.10}
                  distortion={0.1}
                  distortionScale={0.1}
                  temporalDistortion={0.2}
                  iridescence={3}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[0, 1400]}
                  side={THREE.DoubleSide}
                  blend={0}
                  color={'#FB62F6'}
                  >
              </MeshTransmissionMaterial>
            </RoundedBox>
          </mesh>

          <Float speed={1} rotationIntensity={1.2} floatingRange={[-.5, .3]}>
            <Text3D
              font={latoBold}
              position={[-4, -.3, .6]}
              scale={[.5, .5, .5]}
              letterSpacing={.15}
              height={.2}
            >
              React Three Fiber
            <meshStandardMaterial color={'#E3170A'} castShadow  />
          </Text3D>
          </Float>
          <Text3D
            font={latoBold}
            rotation={[.1, 0, .2]}
            position={[-4, 1, 0]}
            scale={[.5, .5, .5]}
            letterSpacing={.15}
            height={.2}
          >
            React
          <meshStandardMaterial color={'#42CAFD'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[-.5, 0, -.5]}
            position={[0, 1.3, 0]}
            scale={[.4, .4, .4]}
            letterSpacing={.15}
            height={.2}
          >
            Javascript
          <meshStandardMaterial color={'#DDA77B'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[.5, 0, .5]}
            position={[0, -1.3, 0]}
            scale={[.4, .4, .4]}
            letterSpacing={.15}
            height={.2}
          >
            Ruby
          <meshStandardMaterial color={'#DDA77B'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0, .1, -.2]}
            position={[-4, -1.3, 0]}
            scale={[.35, .35, .35]}
            letterSpacing={.15}
            height={.2}
          >
            Firebase
          <meshStandardMaterial color={'#3F84E5'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0, -.1, .2]}
            position={[2, -1.4, .2]}
            scale={[.4, .4, .4]}
            letterSpacing={.15}
            height={.2}
          >
            Blender
          <meshStandardMaterial color={'#01FDF6'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0.1, -.15, -.3]}
            position={[2, 1.4, -.5]}
            scale={[.3, .3, .3]}
            letterSpacing={.15}
            height={.2}
          >
            Python
          <meshStandardMaterial color={'#01FDF6'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0.1, -.25, -.1]}
            position={[-1.7, 1.7, -.5]}
            scale={[.3, .3, .3]}
            letterSpacing={.15}
            height={.2}
          >
            Node
          <meshStandardMaterial color={'#01FDF6'} castShadow  />
        </Text3D>
        </group>
      </Float>
    </PresentationControls>

    <Environment >
      <Lightformer type='ring' intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color={'lightblue'}/>
      <Lightformer type='circle' intensity={9} rotation-x={Math.PI / 2} position={[0, -5, -9]} scale={[10, 10, 1]} color={'#CBBAED'}/>
    </Environment>
  </>
}
