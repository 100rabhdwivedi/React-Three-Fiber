# React Three Fiber 3D Application  

This project is a 3D application built with **React Three Fiber**, showcasing the integration of 3D objects, dynamic animations, and user interactions. The application uses advanced features like lighting, shadows, animations, and GUI-based parameter control to provide an interactive experience.  

---

## Features  

- **3D Object Rendering:** Includes a rotating cube and a dynamically positioned sphere.  
- **Dynamic Lighting and Shadows:** Realistic lighting with ambient and directional lights, complete with shadows.  
- **User Interaction:** Control object properties (position, scale, color, visibility) through a user-friendly GUI using **Leva**.  
- **Performance Monitoring:** Real-time stats using **r3f-perf** for system performance tracking.  
- **Environment Mapping:** Realistic HDRI-based lighting using **@react-three/drei**.  
- **Interactive Camera:** OrbitControls allow users to pan, zoom, and rotate the camera.  
- **Responsive Design:** The 3D scene adjusts dynamically based on the device's performance capabilities.  

---

## Technologies Used  

- **React**: JavaScript library for building the user interface.  
- **React Three Fiber**: Declarative library for 3D rendering in React using Three.js.  
- **Three.js**: Core 3D rendering library.  
- **Leva**: Lightweight GUI for tweaking parameters interactively.  
- **@react-three/drei**: Utility components and helpers for React Three Fiber.  
- **r3f-perf**: Performance monitoring tool for React Three Fiber.  

---

## Setup Instructions  

### Prerequisites  

- **Node.js** and **npm** installed on your system.  

### Steps  

1. Clone the repository:  
   ```bash  
   git clone <repository_url>  
   ```

2. Navigate to the project directory:  
   ```bash  
   cd R3F-D1 
   ```

3. Install dependencies:  
   ```bash  
   npm install  
   ```

4. Start the development server:  
   ```bash  
   npm start  
   ```

5. Open the application in your browser:  
   ```  
   http://localhost:3000  
   ```

---

## File Structure  

```  
.  
├── src  
│   ├── App.jsx              # Main application component  
│   ├── Container.jsx        # 3D scene and logic for objects  
│   ├── style.css           # Custom styles for the application  
├── public  
│   └── index.html          # HTML entry point  
├── package.json            # Node.js dependencies  
├── README.md               # Project documentation  
```

---

## Detailed Code Explanation  

### App.js  

**App.js** sets up the application structure, including the **Canvas** for rendering the 3D scene and the camera settings.  

#### Key Highlights  

1. **Camera Configuration:**  
   ```javascript  
   const cameraSetting = {  
     fov: 75,  
     near: 0.1,  
     far: 1000,  
     position: [5, 2, 5],  
   };  
   ```

2. **Canvas Setup:**  
   ```javascript  
   <Canvas  
     shadows  
     gl={{ shadowMap: true, shadowMapType: THREE.PCFSoftShadowMap }}  
     dpr={[1, 2]}  
     camera={cameraSetting}  
     gl={{ antialias: true, toneMapping: THREE.CineonToneMapping, outputEncoding: THREE.sRGBEncoding }}  
   >  
     <Container />  
   </Canvas>  
   ```

---

### Container.js  

**Container.js** contains the logic for the 3D scene, including object rendering, animations, and lighting.  

#### Key Highlights  

1. **Lighting Setup:**  
   ```javascript  
   <ambientLight intensity={0.5} />  
   <directionalLight  
     position={[4, 2, 2]}  
     castShadow  
     intensity={1}  
     shadow-mapSize={[1024, 1024]}  
   />  
   ```

2. **Environment Mapping:**  
   ```javascript  
   <Environment  
     preset="sunset"  
     ground={{ height: 7, radius: 28, scale: 100 }}  
   />  
   ```

3. **Dynamic Sphere Properties:**  
   ```javascript  
   const { position, color, visible } = useControls("Sphere", {  
     position: { value: { x: -2, y: 0 }, step: { x: 0.1, y: 0.1 } },  
     color: { value: "rgb(255,255,255)" },  
     visible: { value: true },  
   });  
   ```

4. **Rotating Cube Animation:**  
   ```javascript  
   useFrame((state, delta) => {  
     cubeRef.current.rotation.y += delta;  
   });  
   ```

5. **Performance Monitoring:**  
   ```javascript  
   const { performance } = useControls("Performance", {  
     performance: true,  
   });  
   {performance && <Perf position="top-left" />}  
   ```

---

## How It Works  

1. **Lighting and Shadows:**  
   Ambient and directional lights provide realistic illumination. Shadows are baked for better performance.  

2. **Object Control:**  
   Users can adjust the sphere's position, color, and visibility, as well as the cube's scale and material color.  

3. **Real-Time Animation:**  
   The cube rotates continuously, showcasing how to animate objects with `useFrame`.  

4. **Responsive Design:**  
   The canvas adjusts dynamically based on the device’s resolution and pixel density.  

---

## License  

This project is licensed under the MIT License. Feel free to use, modify, and distribute it for your own projects.  

---

## Future Enhancements  

- Add more complex 3D models and animations.  
- Integrate additional features like physics or particle effects.  
- Expand the GUI controls for more customization options.  

---  

Feel free to experiment with the code and customize the project to suit your needs. Happy coding! 🚀  
