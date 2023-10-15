import { motion } from "framer-motion-3d"
import { useMotionValue, useTransform } from "framer-motion"


export default function Framer() {
  const x = useMotionValue(100)

  // animate the cube if
  const opacity = useTransform(x, [0, 200], [0.5, 1])



  return <>
    <motion.pointLight animate={{ x: 3, y: 4, z: 4 }} />
    <motion.mesh
      whileHover={{ scale: 1.2 }}

    >
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </motion.mesh>


  </>
}
