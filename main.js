var originalImage = null;
var grayImage = null;
var redImage = null;
var greenImage = null;
var blueImage = null;
var rainbowImage = null;
var blurImage = null;
var invertImage = null;
var frameImage = null;
var waveImage = null;
var lineImage = null;
var brightImage = null;
var purpleImage = null;
var willowImage = null;
var warmImage = null;
var canvas = document.getElementById("theCanvas");

function loadImage() {
  var file = document.getElementById("fileInput");
  originalImage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  greenImage = new SimpleImage(file);
  blueImage = new SimpleImage(file);
  purpleImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);
  blurImage = new SimpleImage(file);
  invertImage = new SimpleImage(file);
  frameImage = new SimpleImage(file);
  waveImage = new SimpleImage(file);
  lineImage = new SimpleImage(file);
  brightImage = new SimpleImage(file);
  originalImage.drawTo(canvas);
  willowImage = new SimpleImage(file);
  warmImage = new SimpleImage(file);
}

function makeGray() {
  if (imageIsLoaded(grayImage)) {
    filterGray();
    grayImage.drawTo(canvas);
  }
}

function filterGray() {
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function makeRed() {
  if (imageIsLoaded(redImage)) {
    filterRed();
    redImage.drawTo(canvas);
  }
}

function filterRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}
function makeGreen() {
  if (imageIsLoaded(greenImage)) {
    filterGreen();
    greenImage.drawTo(canvas);
  }
}

function filterGreen() {
  for (var pixel of greenImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}
function makeBlue() {
  if (imageIsLoaded(blueImage)) {
    filterBlue();
    blueImage.drawTo(canvas);
  }
}

function filterBlue() {
  for (var pixel of blueImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
  }
}

function makeRainbow() {
  if (imageIsLoaded(rainbowImage)) {
    filterRainbow();
    rainbowImage.drawTo(canvas);
  }
}
function filterRainbow() {
  for (var pixel of originalImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    var newPixel = rainbowImage.getPixel(x, y);
    var stripe = originalImage.getHeight() / 7;
    if (y < stripe) {
      if (average < 128) {
        newPixel.setRed(2 * average);
        newPixel.setGreen(0);
        newPixel.setBlue(0);
      } else {
        newPixel.setRed(255);
        newPixel.setGreen(2 * average - 255);
        newPixel.setBlue(2 * average - 255);
      }
    } else if (y < stripe * 2 && y > stripe) {
      if (average < 128) {
        newPixel.setRed(2 * average);
        newPixel.setGreen(0.8 * average);
        newPixel.setBlue(0);
      } else {
        newPixel.setRed(255);
        newPixel.setGreen(1.2 * average - 51);
        newPixel.setBlue(2 * average - 255);
      }
    } else if (y > stripe * 2 && y < stripe * 3) {
      if (average < 128) {
        newPixel.setRed(2 * average);
        newPixel.setGreen(2 * average);
        newPixel.setBlue(0);
      } else {
        newPixel.setRed(255);
        newPixel.setGreen(255);
        newPixel.setBlue(2 * average - 255);
      }
    } else if (y > stripe * 3 && y < stripe * 4) {
      if (average < 128) {
        newPixel.setRed(0);
        newPixel.setGreen(2 * average);
        newPixel.setBlue(0);
      } else {
        newPixel.setRed(2 * average - 255);
        newPixel.setGreen(255);
        newPixel.setBlue(2 * average - 255);
      }
    } else if (y > stripe * 4 && y < stripe * 5) {
      if (average < 128) {
        newPixel.setRed(0);
        newPixel.setGreen(0);
        newPixel.setBlue(2 * average);
      } else {
        newPixel.setRed(2 * average - 255);
        newPixel.setGreen(2 * average - 255);
        newPixel.setBlue(255);
      }
    } else if (y > stripe * 5 && y < stripe * 6) {
      if (average < 128) {
        newPixel.setRed(0.8 * average);
        newPixel.setGreen(0);
        newPixel.setBlue(2 * average);
      } else {
        newPixel.setRed(1.2 * average - 51);
        newPixel.setGreen(2 * average - 255);
        newPixel.setBlue(255);
      }
    } else {
      if (average < 128) {
        newPixel.setRed(1.6 * average);
        newPixel.setGreen(0);
        newPixel.setBlue(1.6 * average);
      } else {
        newPixel.setRed(0.4 * average + 153);
        newPixel.setGreen(2 * average - 255);
        newPixel.setBlue(0.4 * average + 153);
      }
    }
  }
}
function nearbyPixel(x, y, orgImage) {
  var lx = Math.floor(Math.random() * 10);
  var ly = Math.floor(Math.random() * 10);
  var pw = checkBorder(x + lx, blurImage.getWidth());
  var ph = checkBorder(y + ly, blurImage.getHeight());
  return blurImage.getPixel(pw, ph);
}
function checkBorder(x, size) {
  if (x < 0) {
    return 0;
  } else if (x > size - 1) {
    return size - 1;
  } else {
    return x;
  }
}

function makeBlur() {
  if (imageIsLoaded(blurImage)) {
    filterBlur();
    blurImage.drawTo(canvas);
  }
}

function filterBlur() {
  var img = document.getElementById("originalImage");
  for (var pixel of blurImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var ran = Math.random();

    if (ran > 0.5) {
      blurImage.setPixel(x, y, pixel);
    } else {
      var newPix = nearbyPixel(x, y, img);
      blurImage.setPixel(x, y, newPix);
    }
  }
}
function makeInvert() {
  if (imageIsLoaded(invertImage)) {
    filterInvert();
    invertImage.drawTo(canvas);
  }
}
function filterInvert() {
  for (var pixel of invertImage.values()) {
    var ir = 255 - pixel.getRed();
    var ig = 255 - pixel.getGreen();
    var ib = 255 - pixel.getBlue();
    pixel.setRed(ir);
    pixel.setGreen(ig);
    pixel.setBlue(ib);
  }
}
function reset() {
  if (imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    greenImage = new SimpleImage(originalImage);
    rainbowImage = new SimpleImage(originalImage);
    blurImage = new SimpleImage(originalImage);
    invertImage = new SimpleImage(originalImage);
    frameImage = new SimpleImage(originalImage);
    waveImage = new SimpleImage(originalImage);
    lineImage = new SimpleImage(originalImage);
    brightImage = new SimpleImage(originalImage);
    purpleImage = new SimpleImage(originalImage);
    willowImage = new SimpleImage(originalImage);
    warmImage = new SimpleImage(originalImage);
  }
}

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}
function doBlackFrame() {
  if (imageIsLoaded(frameImage)) {
    filterBlackFrame();
    frameImage.drawTo(canvas);
  }
}
function filterBlackFrame() {
  var height = frameImage.getHeight();
  var width = frameImage.getWidth();
  var borderThickness = height * (1 / 12);
  for (var pixel of frameImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    //top border
    if (y < borderThickness) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    //bottom border
    if (y > height - borderThickness && y < height) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    //left border
    if (x < borderThickness) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    //right border
    if (x > width - borderThickness && x < width) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
}
function doWave() {
  if (imageIsLoaded(waveImage)) {
    filterWave();
    waveImage.drawTo(canvas);
  }
}

function filterWave() {
  for (var pixel of waveImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var w = waveImage.getWidth();
    var h = waveImage.getHeight();
    if (y <= h / 8 + (h / 10) * Math.sin((x * Math.PI) / 180 + w / 2)) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }

    if (y > (7 / 8) * h + (h / 10) * Math.sin((x * Math.PI) / 180 + w / 2)) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
}

function doLine() {
  if (imageIsLoaded(lineImage)) {
    filterLine();
    lineImage.drawTo(canvas);
  }
}
function filterLine() {
  for (var pixel of lineImage.values()) {
    var height = lineImage.getHeight();
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {
      //red
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < (height * 2) / 7) {
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    } else if (y < (height * 3) / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < (height * 4) / 7) {
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    } else if (y < (height * 5) / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < (height * 6) / 7) {
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    } else if (y < (height * 7) / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
  }
}
function doWhiteFrame() {
  if (imageIsLoaded(frameImage)) {
    filterWhiteFrame();
    frameImage.drawTo(canvas);
  }
}
function filterWhiteFrame() {
  var height = frameImage.getHeight();
  var width = frameImage.getWidth();
  var borderThickness = height * (1 / 12);
  for (var pixel of frameImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    //top border
    if (y < borderThickness) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(255);
    }
    //bottom border
    if (y > height - borderThickness && y < height) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(255);
    }
    //left border
    if (x < borderThickness) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(255);
    }
    //right border
    if (x > width - borderThickness && x < width) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(255);
    }
  }
}
function makeBright() {
  if (imageIsLoaded(brightImage)) {
    filterBright();
    brightImage.drawTo(canvas);
  }
}

function filterBright() {
  for (var pixel of brightImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(2 * pixel.getRed());
    pixel.setGreen(2 * pixel.getGreen());
    pixel.setBlue(2 * pixel.getBlue());
  }
}
function makePurple() {
  if (imageIsLoaded(purpleImage)) {
    filterPurple();
    purpleImage.drawTo(canvas);
  }
}

function filterPurple() {
  for (var pixel of purpleImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(2 * avg);
    pixel.setGreen(avg);
    pixel.setBlue(2 * avg);
  }
}
function makeWillow() {
  if (imageIsLoaded(willowImage)) {
    filterWillow();
    willowImage.drawTo(canvas);
  }
}

function filterWillow() {
  for (var pixel of willowImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg - 40);
    pixel.setGreen(avg - 40);
    pixel.setBlue(avg - 40);
  }
}
function makeWarm() {
  if (imageIsLoaded(warmImage)) {
    filterWarm();
    warmImage.drawTo(canvas);
  }
}

function filterWarm() {
  for (var pixel of warmImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(pixel.getRed() - 50);
    pixel.setGreen(pixel.getGreen() - 50);
    pixel.setBlue(pixel.getBlue() - 50);
  }
}
var download = document.createElement('a');
download.className="ONE";
download.innerHTML = 'Download the image'
download.addEventListener('click', function(ev) {
  download.href = canvas.toDataURL();
  download.download = 'img.png';
}, false);

document.body.appendChild(download);


