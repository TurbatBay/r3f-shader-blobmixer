'use client'
import { Canvas } from '@react-three/fiber'
import Blob from '@/components/Blob'
import { OrbitControls } from '@react-three/drei'
export default function Home() {
  return (
    <main>
      <div className='container h-screen'>
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <OrbitControls />
          <Blob />
        </Canvas>
      </div>
    </main>
  )
}
