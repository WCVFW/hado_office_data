import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Rig() {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const { pointer } = state
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.25, 0.03)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.15, 0.03)
  })
  return (
    <group ref={group}>
      <Structure />
    </group>
  )
}

function Structure() {
  const icoRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const octaRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (icoRef.current) icoRef.current.rotation.y += delta * 0.18
    if (icoRef.current) icoRef.current.rotation.x += delta * 0.06
    if (torusRef.current) torusRef.current.rotation.x += delta * 0.12
    if (torusRef.current) torusRef.current.rotation.z += delta * 0.08
    if (octaRef.current) octaRef.current.rotation.y -= delta * 0.22
  })

  return (
    <>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={icoRef} position={[1.5, 0.4, 0]} scale={1.35}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0f1e38"
            metalness={0.85}
            roughness={0.22}
            emissive="#c9a24b"
            emissiveIntensity={0.06}
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={1.6}>
        <mesh ref={torusRef} position={[-1.8, -0.6, -0.6]} scale={0.9}>
          <torusGeometry args={[1, 0.32, 32, 100]} />
          <MeshDistortMaterial
            color="#c9a24b"
            metalness={0.6}
            roughness={0.3}
            distort={0.15}
            speed={1.4}
          />
        </mesh>
      </Float>

      <Float speed={1.7} rotationIntensity={0.5} floatIntensity={1.4}>
        <mesh ref={octaRef} position={[0.1, -1.4, 0.8]} scale={0.68}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#e8cf94" metalness={0.9} roughness={0.15} />
        </mesh>
      </Float>

      <Sparkles count={60} scale={[6, 4, 4]} size={2.2} speed={0.25} color="#d9b96a" opacity={0.5} />
    </>
  )
}

export default function Hero3D() {
  const isNarrow = typeof window !== 'undefined' && window.innerWidth < 640
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, isNarrow ? 9 : 6], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 5, 3]} intensity={1.4} color="#ffffff" />
          <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#c9a24b" />
          <Rig />
        </Suspense>
      </Canvas>
    </div>
  )
}
