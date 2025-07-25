"use client";
import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export const Model = React.forwardRef(({ children, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/product.glb');
  
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0.056, 0.025, 0.111]}>
        <group position={[-0.695, -0.76, -0.603]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[6.748, 13.489, 8.829]}>
          <mesh geometry={nodes['Unten_pcbV1000-A013'].geometry} material={materials['Schwarz_plastik.001']} material-side={THREE.DoubleSide} />
          <mesh geometry={nodes['Unten_pcbV1000-A013_1'].geometry} material={materials.Stahl} material-side={THREE.DoubleSide} />
          <mesh geometry={nodes['Unten_pcbV1000-A013_2'].geometry} material={materials['Gold.Steel']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A013_3'].geometry} material={materials['Blau_plastik.USB']} material-side={THREE.DoubleSide}/>
        </group>
        <group position={[-0.433, -0.581, 0.888]} rotation={[-2.514, 0, 0]} scale={[24.326, 32.261, 26.201]}>
          <mesh geometry={nodes.Circle001.geometry} material={materials['Material.006']} material-side={THREE.DoubleSide} />
          <mesh geometry={nodes.Circle001_1.geometry} material={materials['LIGHT LED']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes.Circle001_2.geometry} material={materials['Material.011']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes.Circle001_3.geometry} material={materials['Material.013']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes.Circle001_4.geometry} material={materials['darkest black']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes.Circle001_5.geometry} material={materials['Material.012']} material-side={THREE.DoubleSide}/>
        </group>
        <group position={[-0.017, -0.098, 0.002]} scale={[26.577, 40.607, 20.314]}>
          <mesh geometry={nodes.Cube012_1.geometry} material={materials['mudrock.001']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes.Cube012_2.geometry} material={materials['darkest black']} material-side={THREE.DoubleSide}/>
        </group>
        <group position={[0.018, -0.497, 0.884]} scale={[25.979, 39.693, 19.857]}>
          <mesh geometry={nodes['Unten_pcbV1000-A011'].geometry} material={materials['Unten_pcbV1000-A']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A011_1'].geometry} material={materials['Schwarz_plastik.001']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A011_2'].geometry} material={materials.Steel_Gebürsted} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A011_3'].geometry} material={materials.Stahl} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A011_4'].geometry} material={materials['Gold.Steel']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A011_5'].geometry} material={materials['Blau_plastik.USB']} material-side={THREE.DoubleSide}/>
        </group>
        <group position={[0.468, -0.497, 0.884]} scale={[25.979, 39.693, 19.857]}>
          <mesh geometry={nodes['Unten_pcbV1000-A012'].geometry} material={materials['Unten_pcbV1000-A']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A012_1'].geometry} material={materials['Schwarz_plastik.001']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A012_2'].geometry} material={materials.Steel_Gebürsted} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A012_3'].geometry} material={materials.Stahl} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A012_4'].geometry} material={materials['Gold.Steel']} material-side={THREE.DoubleSide}/>
          <mesh geometry={nodes['Unten_pcbV1000-A012_5'].geometry} material={materials.Nikon} material-side={THREE.DoubleSide}/>
        </group>
        <mesh geometry={nodes.nut1002.geometry} material={materials['darkest black']} position={[0.827, 0.582, 0.921]} rotation={[0, 0, -0.574]} scale={[17.914, 21.327, 11.658]} />
        <mesh geometry={nodes.nut2002.geometry} material={materials['darkest black']} position={[-0.642, 0.582, 0.921]} rotation={[0, 0, -0.574]} scale={[17.914, 21.327, 11.658]} />
        <mesh geometry={nodes.Text002.geometry} material={materials['gloss black']} position={[-0.361, 0.729, 0.854]} rotation={[0, 1.571, 0]} scale={[0.226, 0.452, 0.296]} />
      </group>
    </group>
  );
});

Model.displayName = "Model";

useGLTF.preload('/product.glb');