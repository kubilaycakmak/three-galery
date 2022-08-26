import * as THREE from 'three'
import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import Lights from './Lights'

const Model = (props) => {
    const group = useRef()
    const { nodes } = useGLTF('/graces-draco.glb')
    useFrame(({ pointer }) => (group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * (Math.PI / 5), 0.005)))
  return (
    <>
        <group ref={group} {...props}>
            <mesh castShadow receiveShadow geometry={nodes.Node_3.geometry} rotation={[-Math.PI / 2, 0, 0]} scale={[0.2, 0.224, 0.224]} dispose={null}>
            <meshStandardMaterial roughness={0.9} metalness={0.5} color="#474747" />
            </mesh>
            <Lights />
        </group>
    </>
  )
}

export default Model