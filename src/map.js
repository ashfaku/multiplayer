import React from 'react';
import './map.css';
var player;
class Map extends React.Component
{	
	componentDidMount = () =>
	{
		player = this.props.player;
		player.setMap(document.getElementById("map"), document.getElementById("player"));
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
			}
		};
		document.getElementById("map").onkeyup = function (event) 
		{
			player.stop();
		};
		
	}
	render()
	{
		return <div id = "map" tabIndex = "-1">
			<img src = "stopped.gif" id = "player" alt = "Player" className = "rotate90" />
			Hi
		</div>
	}
}

export default Map;