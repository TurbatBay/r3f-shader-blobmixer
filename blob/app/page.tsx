'use client'
import { Canvas } from '@react-three/fiber'
import Blob from '@/components/Blob'
export default function Home() {
  return (
    <main>
      <div className='container h-screen'>
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
      </div>
    </main>
  )
}
