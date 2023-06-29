

export default function Placeholder(props) {


  return <>

    <mesh {...props} >
      <boxGeometry args={[2, 2, 2, 3, 3, 3]} />
      <meshBasicMaterial wireframe color={'#DD6E42'} />
    </mesh>

  </>
}
