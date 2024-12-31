import React from 'react'
import {OrbitControls,Environment} from '@react-three/drei'
import Model  from './Model';
import Placeholder from './Placeholder';
import { Suspense } from 'react';
const Container = () => {

    
  return (
    <>
    <Environment
        background
        files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/lakeside_sunrise_1k.hdr'}
    />
    <OrbitControls makeDefault />
        <color attach="background" args={['ivory']}/>
        <directionalLight intensity={1} position={[0,2,2]}/>
        <ambientLight  intensity={1}/>
        {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
        </mesh> */}
        <Suspense fallback={<Placeholder/>}>
        <Model />
        </Suspense>
    </>
  )
}

export default Container