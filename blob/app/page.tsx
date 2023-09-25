'use client'
import { Canvas } from '@react-three/fiber'
import Blob from '@/components/Blob'
import { Environment, OrbitControls, Stage } from '@react-three/drei'
import Blob2 from '@/components/Blob2'
import Pattern1 from '@/components/Patterns/pattern1'
export default function Home() {
  return (
    <main>
      <div className='container h-screen'>
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <OrbitControls />
          {/* <Blob /> */}
          {/* <Blob2 /> */}
          <Pattern1 />
        </Canvas>
      </div>
    </main>
  )
}
