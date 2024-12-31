import React from 'react'
const Placeholder = () => {
  return (
    <>
    <mesh position-y={0.5} scale={[2,3,2]} >
    <boxGeometry args={[1, 1, 1,2,2,2] }  />
     <meshBasicMaterial color="white" wireframe />
    </mesh>
    </>
  )
}

export default Placeholder