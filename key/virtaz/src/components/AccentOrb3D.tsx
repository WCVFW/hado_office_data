import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface AccentOrb3DProps {
  variant?: 'icosahedron' | 'torus' | 'octahedron'
  className?: string
}

function Shape({ variant = 'icosahedron' }: { variant: AccentOrb3DProps['variant'] }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.25
    ref.current.rotation.x += delta * 0.09
  })

  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.3}>
      <mesh ref={ref} scale={1.6}>
        {variant === 'torus' && <torusGeometry args={[1, 0.34, 32, 100]} />}
        {variant === 'octahedron' && <octahedronGeometry args={[1.1, 0]} />}
        {variant === 'icosahedron' && <icosahedronGeometry args={[1.1, 0]} />}
        <MeshDistortMaterial color="#c9a24b" metalness={0.75} roughness={0.25} distort={0.12} speed={1.2} />
      </mesh>
    </Float>
  )
}

export default function AccentOrb3D({ variant = 'icosahedron', className }: AccentOrb3DProps) {
  const isNarrow = typeof window !== 'undefined' && window.innerWidth < 640
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, isNarrow ? 7 : 5], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ pointerEvents: 'none' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 2]} intensity={1.3} />
          <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#0f1e38" />
          <Shape variant={variant} />
        </Suspense>
      </Canvas>
    </div>
  )
}
