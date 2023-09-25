'use client'
import {
  Environment,
  Icosahedron,
  shaderMaterial,
  Sphere,
} from '@react-three/drei'
import { extend } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import vertexShader from './vertexShader'
import fragmentShader from './fragmentShader'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import * as THREE from 'three'
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
    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime()
    // if (mesh.current) {
    //   mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime()

    //   mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
    //     mesh.current.material.uniforms.u_intensity.value,
    //     hover.current ? 1 : 0.15,
    //     0.02
    //   )
    // }
  })
  //  const geometry = new THREE.IcosahedronGeometry(1,100)
  //  const material = new THREE.MeshStandardMaterial({
  //   onBeforeCompile : (shader )
  //  })

  // const onBeforeCompile = (shader) => {
  //   mesh.current.material.userData.shader = shader

  //   // uniforms
  //   shader.uniforms.uTime = { value: 0 }

  //   const parsVertexString = /*glsl*/ `#include <displacementmap_pars_vertex> shader.vertexShader = shader.vertexShader.replace(parsVertexString, parsVertexString + vertexShaderPars) console.log(shader.vertexShader)`
  // }
  // console.log(mesh)
  // console.log(vertexShader + 'VVEEERTEX')
  // console.log(fragmentShader + 'FRAAAG')
  return (
    <React.Fragment>
      <ambientLight></ambientLight>
      <Sphere ref={mesh} args={[1, 500, 500]}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}

          // onBeforeCompile={onBeforeCompile}
        />
        {/* <meshStandardMaterial color='red'></meshStandardMaterial> */}
      </Sphere>
    </React.Fragment>
  )
}

export default Blob
