import { useRef, useState } from 'react'
import { OrbitControls, Center, TorusKnot, Float, Lightformer, Environment, MeshTransmissionMaterial, MeshWobbleMaterial, Html, PresentationControls, Text3D, PerspectiveCamera } from '@react-three/drei'
import '../stylesheets/contact.css'
import '../stylesheets/resume.css'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'


export default function ResumeComponent() {

     // Image Scale State and Function
     const [viewHeight, setViewHeight] = useState(300);
     const [viewWidth, setViewWidth] = useState(300);
     const [screenPosition, setScreenPosition] = useState([0, 0, -1])

     useEffect(() => {
       function handleResize() {
         const { innerWidth } = window;
         const isMobile = innerWidth <= 768; // Adjust the breakpoint for mobile devices
         const width = isMobile ? 450 : 1185; // Adjust the scale values for mobile
         const height = isMobile ? 485 : 500;
         const position = isMobile ? [0, -.22, 0] : [0, -.2, 0];
         setViewWidth(width);
         setViewHeight(height);
         setScreenPosition(position);
       }

       window.addEventListener('resize', handleResize);
     handleResize(); // Call the function initially

     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

  return <>


      <div className='resume-canvas'>
        <Canvas>
          <PerspectiveCamera position={[0, 0, -4]} >
        {/* <OrbitControls /> */}
        <ambientLight intensity={.8} />
          {/* <Center> */}
            <Html castShadow receiveShadow occlude="blending" position={screenPosition} transform>
              <iframe className='scene' title="embed" width={viewWidth} height={viewHeight} src="https://resume-display.vercel.app/" frameBorder={0} />
            </Html>
          {/* </Center> */}
          </PerspectiveCamera>

        </Canvas>
      </div>


  </>
}
