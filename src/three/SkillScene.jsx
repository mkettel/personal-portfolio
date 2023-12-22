import { MeshReflectorMaterial, Float, Lightformer, Environment, MeshTransmissionMaterial, PresentationControls, Text3D, RoundedBox, CameraControls } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
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
        const isMobile = innerWidth <= 1000; // Adjust the breakpoint for mobile devices
        const scale = isMobile ? 1.4 : 1.95; // Adjust the scale values for mobile
        const position = isMobile ? [0, 0, -1] : [0, 0, -1.5]
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

    {/* <ambientLight castShadow intensity={3} /> */}
    <directionalLight position={[9, 5, 10]} intensity={2} iridescence={4} />

    {/* Presentation Controls */}
    {/* <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={false} // Snap-back to center (can also be a spring config)
      speed={.5} // Speed factor
      zoom={1.2} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[-0.5, Math.PI / 2]} // Vertical limits
      azimuth={[-Infinity, Infinity]} // Horizontal limits
      config={{ mass: 2, tension: 300, friction: 20 }} // Spring config
      > */}

    <CameraControls truckSpeed={0} dollySpeed={0} minPolarAngle={0} maxPolarAngle={Math.PI / 2}  />

      {/* Cube Group */}
      {/* <Float ref={cube} speed={0.6} rotationIntensity={1.8}  floatingRange={[-1, 1]}> */}
        <group ref={cube} position={cubePosition} scale={cubeScale} >

          <mesh castShadow position={[0, 0, 0]} >
            <RoundedBox args={[9, 5, 5]} castShadow  radius={.5} >
              <MeshTransmissionMaterial
                  backside
                  samples={4}
                  thickness={1.5}
                  ior={1.3}
                  chromaticAberration={0.025}
                  anisotropy={0.02}
                  distortion={0.12}
                  distortionScale={0.19}
                  temporalDistortion={0.2}
                  iridescence={7}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[0, 1400]}
                  side={THREE.DoubleSide}
                  // blend={0}
                  // color={'white'}
                  // attenuationColor={'blue'}
                  // background={'yellow'}
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
              height={.3}
            >
              React Three Fiber
            <MeshReflectorMaterial color={'#E087EF'} castShadow  />
          </Text3D>
          </Float>
          <Text3D
            font={latoBold}
            rotation={[.1, 0, .2]}
            position={[-4, 1, 0]}
            scale={[.5, .5, .5]}
            letterSpacing={.15}
            height={.4}
            bevelThickness={.9}
          >
            React
          <meshStandardMaterial color={'#EE5D17'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[-.3, 0, -.3]}
            position={[0, 1.3, 0]}
            scale={[.4, .4, .4]}
            letterSpacing={.15}
            height={.5}
          >
            Javascript
          <meshStandardMaterial color={'#EE5D17'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[.5, 0, .5]}
            position={[0, -1.3, 0]}
            scale={[.4, .4, .4]}
            letterSpacing={.15}
            height={.4}
          >
            Vue
          <meshStandardMaterial color={'#0E34A0'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0, .1, -.2]}
            position={[-4, -1.3, 0]}
            scale={[.35, .35, .35]}
            letterSpacing={.15}
            height={.7}
          >
            Firebase
          <meshStandardMaterial color={'#ABEC5F'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0, -.1, 0]}
            position={[-0.7, -1.9, 0.5]}
            scale={[.35, .35, .35]}
            letterSpacing={.15}
            height={.4}
          >
            MySQL
          <meshStandardMaterial color={'#D1345B'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0, -.1, .2]}
            position={[2, -1.4, .2]}
            scale={[.4, .4, .4]}
            letterSpacing={.15}
            height={.3}
          >
            Blender
          <meshStandardMaterial color={'#EE5D17'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0.1, -.15, -.3]}
            position={[2, 1.4, -.5]}
            scale={[.3, .3, .3]}
            letterSpacing={.15}
            height={.3}
          >
            Python
          <meshStandardMaterial color={'#ABEC5F'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0.1, -.25, -.1]}
            position={[-1.7, 1.7, -.5]}
            scale={[.3, .3, .3]}
            letterSpacing={.15}
            height={.4}
          >
            Node.js
          <meshStandardMaterial color={'#D1345B'} castShadow  />
        </Text3D>
          <Text3D
            font={latoBold}
            rotation={[0.1, -.25, -.1]}
            position={[-2.4, .8, -1.4]}
            scale={[.3, .3, .3]}
            letterSpacing={.15}
            height={.4}
          >
            C#
          <meshStandardMaterial color={'#0E34A0'} castShadow  />
        </Text3D>
        </group>
      {/* </Float> */}
    {/* </PresentationControls> */}

    <Environment >
      <Lightformer type='ring' intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color={'lightblue'}/>
      <Lightformer type='circle' intensity={9} rotation-x={Math.PI / 2} position={[0, -5, -9]} scale={[10, 10, 1]} color={'#CBBAED'}/>
    </Environment>
  </>
}
