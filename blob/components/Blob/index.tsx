'use client'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import vertexShader from './vertexShader'
import fragmentShader from './fragmentShader'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
const Blob = () => {
  const mesh: any = useRef()
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 2 },
      u_intensity: { value: 0.3 },
    }
  }, [])

  useFrame((state) => {
    const { clock } = state
    mesh.current.material.uniforms.uTime.value = 0.2 * clock.getElapsedTime()
    // if (mesh.current) {
    //   mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime()

    //   mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
    //     mesh.current.material.uniforms.u_intensity.value,
    //     hover.current ? 1 : 0.15,
    //     0.02
    //   )
    // }
  })
  return (
    <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
      <ambientLight />
      <sphereGeometry args={[2, 1000, 1000]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default Blob
