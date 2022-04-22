import React, {Suspense } from 'react';
import './map.css';
import {useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, useGLTF, useAnimations} from '@react-three/drei';
var player;

function Model({ ...props }) {
  const group = useRef();
  useFrame(() => {
	group.current.position.x = player.getX();
	//group.current.position.y = player.getY();
	//group.current.position.z = player.getZ();
	
  });
  const { nodes, materials, animations } = useGLTF('/CesiumMan.gltf');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} scale = {1}> 
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, -Math.PI / 2]}>
            <primitive object={nodes.Skeleton_torso_joint_1} />
            <skinnedMesh geometry={nodes.Cesium_Man.geometry} material={materials['Cesium_Man-effect']} material-color = {"red"} skeleton={nodes.Cesium_Man.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

class Map extends React.Component
{	
	componentDidMount = () =>
	{
		player = this.props.player;
		player.setMap(document.getElementById("map"));//, document.getElementById("player"));
		document.getElementById("map").onkeypress = function (event) 
		{
			console.log(event.keyCode);
			if (event.keyCode >= 37 && event.keyCode <= 40)
			{
				console.log("Hi");
				player.moving();
			}
		};
		document.getElementById("map").onkeydown = function (event) 
		{
			player.moving();
			switch (event.keyCode) {
				case 37:
					console.log("Left key is pressed.");
					player.moveX(.1);
					break;
				case 38:
					player.moveY(.1);
					break;
				case 39:
					player.moveX(-.1);
					break;
				case 40:
					player.moveY(-.1);
					break;
                default:
                    break;
			}
		};
		document.getElementById("map").onkeyup = function (event) 
		{
			player.stop();
		};	
	}
	render()
	{
		return <div id = "map" tabIndex = "0">
			<Canvas>
				<Suspense fallback = {null}>
					<ambientLight /> 
					<spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
					<Model />
					<OrbitControls minPolarAngle = {Math.PI / 4} maxPolarAngle={Math.PI / 4} enablePan={false}
                                         enableZoom={false}
                                         enableRotate={true}/>
				</Suspense>
			</Canvas>
		</div>
	}
}

export default Map;
