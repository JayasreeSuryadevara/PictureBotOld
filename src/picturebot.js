const SIZE = 400;
const CANVAS = null;
const INTERVAL = 45;
const THRESHOLD = 60;

const OBJECT_PROP = null;
const OBSERVATIONS = [];
const OBS_COUNT = 0;
const DIMENSIONS = 2;    

export default class PictureBot {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    CANVAS = canvas;
    this.getCameraPermissions();
    this.startEvents();
  }

  getCameraPermissions() {
    let constraints = { video: true };
    let permission = navigator.mediaDevices.getUserMedia(constraints);
    permission.then((stream) => {
      let video = document.createElement('video');
      console.log('Got stream with constraints:', constraints);
      console.log('Using video device:', video);
      video.srcObject = stream;
      video.play();
      setInterval(updateImage, INTERVAL, video);
    }
    ).catch((err) => {
        alert("Cannot access Camera!");
      }
    );
  }

  startEvents() {
    const button = document.getElementById("button");
    button.addEventListener("click" , this.learn());
    const inputField = document.getElementById("image-name");
    inputField.addEventListener("keyup", (e) => this.checkKeyPress(e));
  }

  learn() {
    let name = document.getElementById("image-name").value;
    if (name == "") {
      alert("Enter a name for this object.");
      return;
    }
    OBS_COUNT++;
    OBSERVATIONS[OBS_COUNT] = {
      name: name,
      prop: OBJECT_PROP
    }
    document.getElementById("image-name").value = "";
  }

  checkKeyPress(event) {
    if (event.key == "Enter") {
      learn();
    }
  }

  processMatrix(matrix) {
    isolateObject(matrix);
    let box = getBoundingBox(matrix);
    let boxProp = getBoxProperties(box);

    let blackPixels = countBlackPixels(matrix);
    let boxArea = boxProp.width * boxProp.length;
    let fullness = blackPixels / boxArea;

    OBJECT_PROP = boxProp.aspectRatio;

    OBJECT_PROP = [];
    OBJECT_PROP[1] = boxProp.aspectRatio;
    OBJECT_PROP[2] = fullness;

    recognize(OBJECT_PROP);

    updateCanvas(matrix);
    drawBox(box);
  }

  countBlackPixels(matrix) {
    let count = 0;
    for (let i = 1; i <= SIZE; i++) {
      for (let j = 1; j <= SIZE; j++) {
        if (matrix[i][j] == 0) {
          count++;
        }
      }
    }
    return count;
  }

  updateImage(video) {
    let context = CANVAS.getContext('2d');

    let minSize = Math.min(video.videoWidth, video.videoHeight);
    let startX = (video.videoWidth - minSize) / 2;
    let startY = (video.videoHeight - minSize) / 2;

    context.drawImage(video, startX, startY, minSize, minSize, 0, 0, SIZE, SIZE);

    let image = context.getImageData(0, 0, SIZE, SIZE);
    let matrix = getPixelMatrix(image.data);
    processMatrix(matrix);
  }

  recognize(currentObject) {
    let name;
    if (OBS_COUNT == 0) {
      name = '?';
    } else {
      let neighbor = getNearestNeighbor(currentObject);
      name = neighbor.name;
    }
    document.getElementById("output").innerHTML = name;
  }

  getNearestNeighbor(currentObject) {
    let neighbor = null;
    let minDist = null;
    for (let i = 1; i <= OBS_COUNT; i++) {
      let dist = Math.abs(currentObject - OBSERVATIONS[i].prop);
      let dist = distance(currentObject, OBSERVATIONS[i].prop);
      if (minDist == null || minDist > dist) {
        minDist = dist;
        neighbor = OBSERVATIONS[i];
      }
    }
    return neighbor;
  }

  distance(p1, p2) {
    let dist = 0;
    for (let i = 1; i <= DIMENSIONS; i++) {
      dist += (p1[i] - p2[i]) * (p1[i] - p2[i]);
    }
    return Math.sqrt(dist);
  }

  getBoxProperties(box) {
    let prop = {
      length: 0,
      width: 0,
      aspectRatio: 0
    }

    let deltaX = box.xMax - box.xMin + 1;
    let deltaY = box.yMax - box.yMin + 1;

    prop.length = Math.max(deltaX, deltaY);
    prop.width = Math.min(deltaX, deltaY);
    prop.aspectRatio = prop.width / prop.length;

    return prop;
  }

  getBoundingBox(matrix) {
    let bbox = {
      xMin: SIZE + 1,
      xMax: 0,
      yMin: SIZE + 1,
      yMax: 0
    };

    for (let y = 1; y <= SIZE; y++) {
      for (let x = 1; x <= SIZE; x++) {
        if (matrix[y][x] == 0) {
          bbox.yMin = Math.min(y, bbox.yMin);
          bbox.yMax = Math.max(y, bbox.yMax);
          bbox.xMin = Math.min(x, bbox.xMin);
          bbox.xMax = Math.max(x, bbox.xMax);
        }
      }
    }

    return bbox;
  }

  drawBox(box) {
    let context = CANVAS.getContext('2d');
    context.beginPath();
    let deltaX = box.xMax - box.xMin;
    let deltaY = box.yMax - box.yMin;
    context.rect(box.xMin, box.yMin, deltaX, deltaY);
    context.stroke();
  }

  isolateObject(matrix) {
    for (let i = 1; i <= SIZE; i++) {
      for (let j = 1; j <= SIZE; j++) {
        if (matrix[i][j] < THRESHOLD) {
          matrix[i][j] = 0;
        } else {
          matrix[i][j] = 255;
        }
      }
    }
  }

  getPixelMatrix(dataArray) {
    let matrix = [];
    for (let i = 1; i <= SIZE; i++) {
      matrix[i] = [];
      for (let j = 1; j <= SIZE; j++) {
        let groupIndex = (i - 1) * SIZE * 4 + (j - 1) * 4;
        let red = dataArray[groupIndex + 0];
        let green = dataArray[groupIndex + 1];
        let blue = dataArray[groupIndex + 2];
        matrix[i][j] = (red + green + blue) / 3;
      }
    }
    return matrix;
  }

  updateCanvas(matrix) {
    let context = CANVAS.getContext('2d');
    let image = context.getImageData(0, 0, SIZE, SIZE);

    for (let i = 1; i <= SIZE; i++) {
      for (let j = 1; j <= SIZE; j++) {
        let groupIndex = (i - 1) * SIZE * 4 + (j - 1) * 4;
        image.data[groupIndex + 0] = matrix[i][j];
        image.data[groupIndex + 1] = matrix[i][j];
        image.data[groupIndex + 2] = matrix[i][j];
      }
    }

    context.putImageData(image, 0, 0);
  }
}















