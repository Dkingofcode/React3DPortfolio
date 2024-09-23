import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb');

    return (
       <Float floatIntensity={1}>
         <group dispose={null} scale={0.01} { ...props}>
           <mesh  
              castShadow
              receiveShadow
              geometry={nodes['React-Logo_Material002_0'].geometry}
              material={materials['Material.002']}
              position={[0, 0.07935, 0.18102]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[39.166, 39.166, 52.734]}
           />
         </group>
       </Float> 
    )
};


export default ReactLogo;