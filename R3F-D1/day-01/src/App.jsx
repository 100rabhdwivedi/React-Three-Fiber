import React from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css'
import Container from './Container'
import * as THREE from 'three'
import { StrictMode } from 'react'
import { Leva } from 'leva'
const App = () => {
  const cameraSetting = {
    fov:75,
    near:0.1,
    far:1000,
    position: [5, 2, 5]
  }
  return (
    <>
    <StrictMode>
    <Leva collapsed />
      <Canvas shadows gl={{shadowMap:true,shadowMapType: THREE.PCFSoftShadowMap}} dpr={[1,2]}  camera={cameraSetting } gl={{antialias:true, toneMapping:THREE.CineonToneMapping,outputEncoding:THREE.sRGBEncoding}}>
      <Container/>
      </Canvas>
      </StrictMode>
      </>
  )
}

export default App