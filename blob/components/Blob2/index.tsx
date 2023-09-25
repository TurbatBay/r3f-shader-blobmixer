import { Sphere } from '@react-three/drei'
import React from 'react'

const Blob2 = () => {
  return (
    <React.Fragment>
      <mesh>
        <ambientLight></ambientLight>
        <Sphere args={[2, 100]} />
      </mesh>
    </React.Fragment>
  )
}

export default Blob2
