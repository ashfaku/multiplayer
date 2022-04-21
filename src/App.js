import logo from './logo.svg';
import './App.css';
import * as THREE from 'three'
import { Box, Plane } from "@react-three/drei";
import React, { Suspense, useMemo }  from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import niceColors from 'nice-color-palettes';
function PhyPlane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
      <Plane args={[1000, 1000]} ref={ref}>
        <meshStandardMaterial color={color} />
      </Plane>
  );
}
function PhyBox(props) {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

  return (
      <Box
          args={[1, 1, 1]}
          ref={ref}
          onClick={() =>

              // This shoots the object when clicked on
              api.applyImpulse([0, 5, -10], [0, 0, 0])
              // &&

              // This makes the object fly upwards when clicked on

              // api.velocity.set(0, 2, 0)

          }
      >
        <meshNormalMaterial />
      </Box>
  );
}
function App() {
    var camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
        
	return (
		<Canvas>
			<pointLight position={[10, 10, 10]} />
			<mesh>
				<sphereBufferGeometry attach="geometry" />
				<meshStandardMaterial attach="material" color="hotpink" />
			</mesh>
		</Canvas>
	)
}
export default App;
