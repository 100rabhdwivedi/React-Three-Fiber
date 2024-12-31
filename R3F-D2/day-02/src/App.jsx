import React from 'react'
import './style.css'
import Container from './Container'
import { Canvas } from '@react-three/fiber'
const App = () => {
  return (
    <>
      <Canvas>
        <Container/>
      </Canvas>
    </>
  )
}

export default App