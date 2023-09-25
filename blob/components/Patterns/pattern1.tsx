import { Icosahedron, Plane, Sphere } from '@react-three/drei'
import React, { useRef } from 'react'
import { vertexShader } from './vertexShader'
import { fragmentShader } from './fragmentShader'
const Pattern1 = () => {
  const mesh: any = useRef()
  return (
    <>
      <ambientLight></ambientLight>
      <Plane ref={mesh} args={[5, 5]}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </Plane>
    </>
  )
}

export default Pattern1
