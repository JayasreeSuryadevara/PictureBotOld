import PictureBot from './picturebot';

// Constant to manipulate canvas width and height (square)
const SIZE = 300;


const canvas = document.getElementById('canvas');
canvas.width = SIZE;
canvas.height = SIZE;


new PictureBot(canvas);
