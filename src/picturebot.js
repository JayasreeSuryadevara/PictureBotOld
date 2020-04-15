
var SIZE = 300;
var CANVAS = null;
var INTERVAL = 45;
var THRESHOLD = 60;

var OBJECT_PROP = null;
var OBSERVATIONS = [];
var OBS_COUNT = 0;
var DIMENSIONS = 2;    

export default class PictureBot {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    CANVAS = canvas;
    this.getCameraPermissions();
    this.startEvents();
  }

  getCameraPermissions() {
    var constraints = { video: true };
    var permission = navigator.mediaDevices.getUserMedia(constraints);
    permission.then((stream) => {
      var video = document.createElement('video');
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
    var name = document.getElementById("image-name").value;
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
    var box = getBoundingBox(matrix);
    var boxProp = getBoxProperties(box);

    var blackPixels = countBlackPixels(matrix);
    var boxArea = boxProp.width * boxProp.length;
    var fullness = blackPixels / boxArea;

    OBJECT_PROP = boxProp.aspectRatio;

    OBJECT_PROP = [];
    OBJECT_PROP[1] = boxProp.aspectRatio;
    OBJECT_PROP[2] = fullness;

    recognize(OBJECT_PROP);

    updateCanvas(matrix);
    drawBox(box);
  }

  countBlackPixels(matrix) {
    var count = 0;
    for (var i = 1; i <= SIZE; i++) {
      for (var j = 1; j <= SIZE; j++) {
        if (matrix[i][j] == 0) {
          count++;
        }
      }
    }
    return count;
  }

  updateImage(video) {
    var context = CANVAS.getContext('2d');

    var minSize = Math.min(video.videoWidth, video.videoHeight);
    var startX = (video.videoWidth - minSize) / 2;
    var startY = (video.videoHeight - minSize) / 2;

    context.drawImage(video, startX, startY, minSize, minSize, 0, 0, SIZE, SIZE);

    var image = context.getImageData(0, 0, SIZE, SIZE);
    var matrix = getPixelMatrix(image.data);
    processMatrix(matrix);
  }

  recognize(currentObject) {
    var name;
    if (OBS_COUNT == 0) {
      name = '?';
    } else {
      var neighbor = getNearestNeighbor(currentObject);
      name = neighbor.name;
    }
    document.getElementById("output").innerHTML = name;
  }

  getNearestNeighbor(currentObject) {
    var neighbor = null;
    var minDist = null;
    for (var i = 1; i <= OBS_COUNT; i++) {
      var dist = Math.abs(currentObject - OBSERVATIONS[i].prop);
      var dist = distance(currentObject, OBSERVATIONS[i].prop);
      if (minDist == null || minDist > dist) {
        minDist = dist;
        neighbor = OBSERVATIONS[i];
      }
    }
    return neighbor;
  }

  distance(p1, p2) {
    var dist = 0;
    for (var i = 1; i <= DIMENSIONS; i++) {
      dist += (p1[i] - p2[i]) * (p1[i] - p2[i]);
    }
    return Math.sqrt(dist);
  }

  getBoxProperties(box) {
    var prop = {
      length: 0,
      width: 0,
      aspectRatio: 0
    }

    var deltaX = box.xMax - box.xMin + 1;
    var deltaY = box.yMax - box.yMin + 1;

    prop.length = Math.max(deltaX, deltaY);
    prop.width = Math.min(deltaX, deltaY);
    prop.aspectRatio = prop.width / prop.length;

    return prop;
  }

  getBoundingBox(matrix) {
    var bbox = {
      xMin: SIZE + 1,
      xMax: 0,
      yMin: SIZE + 1,
      yMax: 0
    };

    for (var y = 1; y <= SIZE; y++) {
      for (var x = 1; x <= SIZE; x++) {
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
    var context = CANVAS.getContext('2d');
    context.beginPath();
    var deltaX = box.xMax - box.xMin;
    var deltaY = box.yMax - box.yMin;
    context.rect(box.xMin, box.yMin, deltaX, deltaY);
    context.stroke();
  }

  isolateObject(matrix) {
    for (var i = 1; i <= SIZE; i++) {
      for (var j = 1; j <= SIZE; j++) {
        if (matrix[i][j] < THRESHOLD) {
          matrix[i][j] = 0;
        } else {
          matrix[i][j] = 255;
        }
      }
    }
  }

  getPixelMatrix(dataArray) {
    var matrix = [];
    for (var i = 1; i <= SIZE; i++) {
      matrix[i] = [];
      for (var j = 1; j <= SIZE; j++) {
        var groupIndex = (i - 1) * SIZE * 4 + (j - 1) * 4;
        var red = dataArray[groupIndex + 0];
        var green = dataArray[groupIndex + 1];
        var blue = dataArray[groupIndex + 2];
        matrix[i][j] = (red + green + blue) / 3;
      }
    }
    return matrix;
  }

  updateCanvas(matrix) {
    var context = CANVAS.getContext('2d');
    var image = context.getImageData(0, 0, SIZE, SIZE);

    for (var i = 1; i <= SIZE; i++) {
      for (var j = 1; j <= SIZE; j++) {
        var groupIndex = (i - 1) * SIZE * 4 + (j - 1) * 4;
        image.data[groupIndex + 0] = matrix[i][j];
        image.data[groupIndex + 1] = matrix[i][j];
        image.data[groupIndex + 2] = matrix[i][j];
      }
    }

    context.putImageData(image, 0, 0);
  }
}















