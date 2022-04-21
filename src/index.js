import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Map from './map.js';
import Player from './player.js';
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
let p = new Player();
root.render(<Map player = {p} />);
