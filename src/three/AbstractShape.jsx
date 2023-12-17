import React from 'react';
import { useRef, useEffect } from 'react';

const AbstractShape = () => {

  const mesh = useRef();

  useEffect(() => {
    console.log(mesh.current.geometry.attributes);
  }, []);

  return (

      <mesh ref={mesh}>{/* ... */}</mesh>
  );
};

export default AbstractShape;
