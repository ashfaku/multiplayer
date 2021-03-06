/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/CesiumMan.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, -Math.PI / 2]}>
            <primitive object={nodes.Skeleton_torso_joint_1} />
            <skinnedMesh geometry={nodes.Cesium_Man.geometry} material={materials['Cesium_Man-effect']} skeleton={nodes.Cesium_Man.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/CesiumMan.gltf')
