import React from 'react'
// import { useLoader } from '@react-three/fiber'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {useAnimations,Clone,useGLTF} from '@react-three/drei'
import { useEffect } from 'react'
const Model = () => {
  
  // const model = useLoader(GLTFLoader,'./drone.glb')
  // console.log(model);
  const model = useGLTF('./drone.glb')
  const animations = useAnimations(model.animations,model.scene)
  console.log(animations);

  useEffect(()=>{
    const action = animations.actions.hover
    action.play();

    // window.setTimeout(()=>{
    //   animations.actions.exploded_view.play();
    //   animations.actions.exploded_view.play().crossFadeFrom(animations.actions.hover,1)
    // },3000)

  },[])

  
  return (
    <>
        <primitive object={model.scene} scale={4} />
        
        {/* <Clone object={model.scene} position-x={-4} />
        <Clone object={model.scene} position-x={4}/>
        <Clone object={model.scene} position-x={2} /> */}
    </>
  )
}

export default Model