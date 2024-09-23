// import { useState } from 'react'
// //import reactLogo from './assets/react.svg'
// //import viteLogo from '/vite.svg'
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sparkles } from "@react-three/drei";
// import { useRef } from "react";
// import './App.css'


// const RotatingCube = () => {
//   const meshRef = useRef();

//   useFrame(() => {
//     if(meshRef.current) {
//       meshRef.current.rotation.y += 0.01
//       meshRef.current.rotation.x += 0.01
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//      <cylinderGeometry args={[1, 1, 1]} />
//      <meshLambertMaterial color="#468585" emissive="#468585" />  
    
//      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange"  />
//     </mesh>
//   )
// };




// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//            <OrbitControls  enableZoom enablePan enableRotate />

//            <directionalLight  position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />

//            <color attach="background" args={['#F0F0F0']} />

//            <RotatingCube  />
//       </Canvas>
//     </>
//   )
// }

// export default App






import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import Clients from './sections/Clients';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';
import About from './sections/About';



const App = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      {/* <h1 className='text-2xl text-white underline'>Hello, Three.js!</h1> */}
       <Navbar  />
       <Hero  />
       <About />
       <Projects  />
       <Clients  />
       <WorkExperience  />
       <Contact  />
       <Footer  />
    </main>
  )
};

export default App;
