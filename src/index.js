import PictureBot from './picturebot';

// Constant to manipulate canvas width and height (square)
const CONSTANTS = {
  SIZE: 400,
  INTERVAL: 45
}

let canvas = document.getElementById('camera');
canvas.width = SIZE;
canvas.height = SIZE;


// Invoke PictureBot with the canvas
new PictureBot(canvas);
