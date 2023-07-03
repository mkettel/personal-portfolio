import { Lightformer, Environment, MeshTransmissionMaterial, MeshWobbleMaterial, Html, PresentationControls, Text3D, RoundedBox, Center } from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'


export default function SkillScene() {

  const latoBold = './fonts/lato-bold.json'

  const portalOne = useRef();

  useFrame(() => {
    // portalOne.current.position.x += .01
    // portalOne.current.rotation.x += .001
    // portalOne.current.rotation.y += .001
    // portalOne.current.position.y = Math.sin(Date.now() * 0.0001) * 2
    // portalOne.current.position.x = Math.cos(Date.now() * 0.0001) * 3

  })



  return <>

    {/* <Html castShadow receiveShadow occlude="blending" position={[-6, 0, 0]} transform>
      <iframe title="embed" width={500} height={400} src="https://surf-shop-zeta.vercel.app/" frameBorder={0} />
    </Html> */}
    <ambientLight intensity={1} />

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
      <group position={[0, 0, -1]} scale={1.6} >

        <mesh castShadow receiveShadow position={[0, 0, 0]} >
          <RoundedBox args={[9, 5, 5]} castShadow receiveShadow radius={.5} >
            <MeshTransmissionMaterial backside
                samples={4}
                thickness={3}
                chromaticAberration={0.035}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.1}
                temporalDistortion={0.2}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                side={THREE.DoubleSide}
                blend={0}
                // color={'blue'}
                >
            </MeshTransmissionMaterial>
          </RoundedBox>
        </mesh>


        <Text3D
          font={latoBold}
          position={[-4, -.3, .7]}
          scale={[.5, .5, .5]}
          letterSpacing={.15}
          height={.2}
        >
          React Three Fiber
        <meshStandardMaterial color={'#E3170A'} castShadow  />
      </Text3D>
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
        <meshStandardMaterial color={'#3F84E5'} castShadow  />
      </Text3D>


      </group>
    </PresentationControls>

    <Environment >

      <Lightformer type='ring' intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color={'lightblue'}/>
      <Lightformer type={'circle'} intensity={9} rotation-x={Math.PI / 2} position={[0, -5, -9]} scale={[10, 10, 1]} color={'pink'}/>
    </Environment>
  </>
}
