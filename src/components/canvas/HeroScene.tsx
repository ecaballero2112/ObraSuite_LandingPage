'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, Float, Line } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function Buildings() {
  const count = 30
  const positions = useMemo(() => {
    const pos: number[][] = []
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 6
      pos.push([
        Math.cos(angle) * radius,
        Math.random() * 0.5 - 0.25,
        Math.sin(angle) * radius,
      ])
    }
    return pos
  }, [])

  return (
    <group>
      {positions.map((p, i) => {
        const height = 0.3 + Math.random() * 1.2
        const width = 0.2 + Math.random() * 0.4
        const depth = 0.2 + Math.random() * 0.4
        return (
          <group key={i} position={[p[0], p[1], p[2]]}>
            <mesh>
              <boxGeometry args={[width, height, depth]} />
              <meshStandardMaterial color="#3A3E40" roughness={0.8} />
            </mesh>
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
              <lineBasicMaterial color="#4C9206" transparent opacity={0.3} />
            </lineSegments>
          </group>
        )
      })}
    </group>
  )
}

function Nucleus() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05)
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#4C9206"
          emissive="#6BAA1B"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#4C9206" transparent opacity={0.1} wireframe />
      </mesh>
    </group>
  )
}

function DataLines() {
  const points = useMemo(() => {
    const lines: THREE.Vector3[][] = []
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 2 + Math.random() * 5
      const start = new THREE.Vector3(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 1.5,
        Math.sin(angle) * radius,
      )
      const mid = new THREE.Vector3(
        (start.x + 0) * 0.5 + (Math.random() - 0.5) * 0.5,
        (start.y + 0) * 0.5 + (Math.random() - 0.5) * 0.5,
        (start.z + 0) * 0.5 + (Math.random() - 0.5) * 0.5,
      )
      lines.push([start, mid, new THREE.Vector3(0, 0, 0)])
    }
    return lines
  }, [])

  return (
    <group>
      {points.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color="#4C9206"
          lineWidth={1}
          transparent
          opacity={0.2}
        />
      ))}
    </group>
  )
}

function DataNode({ position, label, value }: { position: [number, number, number]; label: string; value: string }) {
  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.15}>
        <mesh>
          <circleGeometry args={[0.08, 8]} />
          <meshBasicMaterial color="#A5D65A" />
        </mesh>
        <Text
          position={[0.25, 0, 0]}
          fontSize={0.08}
          color="#3A3E40"
          anchorX="left"
          anchorY="middle"
          maxWidth={2}
        >
          {`${label}: ${value}`}
        </Text>
      </Float>
    </group>
  )
}

function DataPanels() {
  const panels = [
    { pos: [2.5, 1.2, 0] as [number, number, number], label: 'Avance Físico', value: '78%' },
    { pos: [-2, 1.5, 1.8] as [number, number, number], label: 'PPC', value: '86%' },
    { pos: [0, 1.8, -2.5] as [number, number, number], label: 'Margen Proyectado', value: '22.4%' },
    { pos: [-2.8, 0.8, -1] as [number, number, number], label: 'Stock Crítico', value: '3 ítems' },
  ]

  return (
    <group>
      {panels.map((p, i) => (
        <DataNode key={i} position={p.pos} label={p.label} value={p.value} />
      ))}
    </group>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#F5F5F0" roughness={1} />
    </mesh>
  )
}

function CameraController() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  useFrame(({ pointer }) => {
    if (!reduced) {
      mouse.current.x += (pointer.x * 0.3 - mouse.current.x) * 0.02
      mouse.current.y += (-pointer.y * 0.2 - mouse.current.y) * 0.02
    }
    const scrollY = window.scrollY
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    const progress = Math.min(scrollY / maxScroll, 1)
    const angle = progress * Math.PI * 2
    camera.position.x = 5 * Math.sin(angle) + mouse.current.x
    camera.position.z = 5 * Math.cos(angle) + mouse.current.y
    camera.position.y = 2.5 + mouse.current.y * 0.5
    camera.lookAt(0, 0.5, 0)
  })

  return null
}

export function SceneInner() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <directionalLight position={[-3, 5, -3]} intensity={0.3} color="#A5D65A" />
      <Ground />
      <Buildings />
      <Nucleus />
      <DataLines />
      <DataPanels />
      <CameraController />
    </>
  )
}

export function HeroScene() {
  const reduced = useReducedMotion()

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [5, 2.5, 5], fov: 45, near: 0.1, far: 50 }}
        dpr={reduced ? 1 : [1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <SceneInner />
      </Canvas>
    </div>
  )
}
