import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PortalScene from './three/PortalScene';
import './stylesheets/portal.css'
import { motion } from "framer-motion-3d"
import Framer from './three/Framer';



export default function Portal() {


  return <>
    <div className="blog-container">
      <p>Recent Posts</p>
    </div>
    <div className="scene-root">
      <Canvas >
        <OrbitControls />

        {/* <PortalScene /> */}
        <Framer />

      </Canvas>
    </div>
  </>
}
