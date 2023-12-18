import React from 'react';
import { useRef, useEffect, useMemo } from 'react';
import { Color, Vector3, Quaternion } from "three";
import * as THREE from 'three';


const AbstractShape = (props) => {
  const { count, shape } = props;

  const colors = {
    morning: '#027CA1',
    afternoon: '#BEDCFE',
    evening: '#FF4500',
    night: '#2D7DD2'
  }

  function getColorByTime() {
    const hour = new Date().getHours();

    if (hour < 6) {
      return colors.night;
    } else if (hour < 12) {
      return colors.morning;
    } else if (hour < 18) {
      return colors.afternoon;
    } else {
      return colors.evening;
    }
  }

  // This reference gives us direct access to our points
  const points = useRef();

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "sphere") {
      const distance = 1;

      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi)
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "random") {
      for (let i = 0; i < count; i++) {
        let x = THREE.MathUtils.randFloatSpread(2);
        let y = THREE.MathUtils.randFloatSpread(2);
        let z = THREE.MathUtils.randFloatSpread(2);

        positions.set([x, y, z], i * 3);
      }
    }

      return positions;
  }, [count, shape]);

  return (
    <>
    {/* <ambientLight intensity={.9} /> */}
    <points ref={points} scale={11} >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          />
      </bufferGeometry>
      <pointsMaterial size={1.5} color={getColorByTime()} sizeAttenuation depthWrite={false} />
    </points>
    </>

  );
};

export default AbstractShape;
