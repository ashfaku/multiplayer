export default class Player
{
	constructor(map) 
	{
		this.x = 0;
		this.y = 0;
		this.map = null;
	}
	setMap(m, p)
	{
		this.map = m;
		this.player = p;
		this.player.src = "https://im2.ezgif.com/tmp/ezgif-2-ca60be9749-gif-im/frame_0_delay-0.07s.gif";
	}
	moveX(m)
	{
		this.x += m; 
	}
	moveY(m)
	{
		this.y += m;
	}
	moving()
	{
		if (this.player.src !== "https://media.giphy.com/media/7w6jMHHv3F8re/giphy.gif")
			this.player.src = "https://media.giphy.com/media/7w6jMHHv3F8re/giphy.gif";
	}
	stop()
	{
		this.player.src = "https://im2.ezgif.com/tmp/ezgif-2-ca60be9749-gif-im/frame_0_delay-0.07s.gif";	
	}
	move = (d, v) =>
	{
		if (d === 'x')
			this.moveX(v);
		else
			this.moveY(v);
		this.map.style.backgroundPosition = `${this.x}px ${this.y}px`;
	}
	getX()
	{
		return this.x;
	}
	getY()
	{
		return this.y;
	}

}
