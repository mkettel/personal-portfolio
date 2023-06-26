import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'



export default function Portal() {


  return <>
    <div className="scene-root">
      <Canvas >
        <OrbitControls />

        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

      </Canvas>
    </div>
  </>
}
