'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { GridHelper } from 'three'

function Model() {
  const { scene } = useGLTF('/models/coffee_cup.glb')

  return <primitive object={scene} scale={0.5} position={[0, 0.5, 0]} />
}

function Grid() {
  return <primitive object={new GridHelper(10, 10)} />
}
function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  )
}
function Camera() {
  return (
    <perspectiveCamera
      position={[0, 0, 5]}
      fov={75}
      near={0.1}
      far={1000}
    />
  )
}

function Controls() {
  return (
    <OrbitControls
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      autoRotate={false}
      autoRotateSpeed={1}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      minDistance={2}
      maxDistance={10}
    />
  )
}


export default function Clients() {
  return (
    <div className="pt-40 h-screen">
      <Canvas camera={{ position: [20, 200, 200] }}>
        <Camera />
        <Controls />
        <Lights />
        <Grid />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>

    </div>
  )
}

