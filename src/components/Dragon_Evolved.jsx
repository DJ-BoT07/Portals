import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Dragon_Evolved({ hovered, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/Dragon_Evolved.gltf');
  const { actions } = useAnimations(animations, group);
  console.log(actions);

  useEffect(() => {
    const anime = hovered ? 'Headbutt' : 'Flying_Idle';
    actions[anime].reset().fadeIn(0.5).play();
    return () => actions[anime].fadeOut(0.5);
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Dragon">
            <skinnedMesh
              name="Cube221"
              geometry={nodes.Cube221.geometry}
              material={materials.Dragon_Main}
              skeleton={nodes.Cube221.skeleton}
            />
            <skinnedMesh
              name="Cube221_1"
              geometry={nodes.Cube221_1.geometry}
              material={materials.Dragon_Secondary}
              skeleton={nodes.Cube221_1.skeleton}
            />
            <skinnedMesh
              name="Cube221_2"
              geometry={nodes.Cube221_2.geometry}
              material={materials.Dragon_Horn}
              skeleton={nodes.Cube221_2.skeleton}
            />
            <skinnedMesh
              name="Cube221_3"
              geometry={nodes.Cube221_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube221_3.skeleton}
            />
            <skinnedMesh
              name="Cube221_4"
              geometry={nodes.Cube221_4.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube221_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload the 3D model to avoid loading delays
useGLTF.preload('/models/Dragon_Evolved.gltf');
