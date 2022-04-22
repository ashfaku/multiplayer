import React, {Suspense } from 'react';
import './map.css';
import {useRef, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF, useAnimations} from '@react-three/drei';
var player;

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/CesiumMan.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} scale = {1}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, -Math.PI / 2]}>
            <primitive object={nodes.Skeleton_torso_joint_1} />
            <skinnedMesh geometry={nodes.Cesium_Man.geometry} material={materials['Cesium_Man-effect']} skeleton={nodes.Cesium_Man.skeleton} />
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
					player.move('x', 10);
					break;
				case 38:
					player.move('y', 10);
					break;
				case 39:
					player.move('x', -10);
					break;
				case 40:
					player.move('y', -10);
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
					<Model id = "avatar" />
					<OrbitControls enablePan={false}
                                         enableZoom={false}
                                         enableRotate={true}/>
				</Suspense>
			</Canvas>
		</div>
	}
}

export default Map;
