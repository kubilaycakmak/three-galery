import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

const Lights = () => {
  const groupL = useRef()
    const groupR = useRef()
    const front = useRef()
    useFrame(({ pointer }) => {
      groupL.current.rotation.y = THREE.MathUtils.lerp(groupL.current.rotation.y, -pointer.x * (Math.PI / 2), 0.1)
      groupR.current.rotation.y = THREE.MathUtils.lerp(groupR.current.rotation.y, pointer.x * (Math.PI / 2), 0.1)
      front.current.position.x = THREE.MathUtils.lerp(front.current.position.x, pointer.x * 12, 0.05)
      front.current.position.y = THREE.MathUtils.lerp(front.current.position.y, 7 + pointer.y * 4, 0.05)
    })
  return (
    <>
      <group ref={groupL}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={10} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={10} />
      </group>
      <spotLight castShadow ref={front} penumbra={0.75} angle={Math.PI / 4} position={[0, 0, 8]} distance={10} intensity={15} shadow-mapSize={[2048, 2048]} />
    </>
  )
}

export default Lights