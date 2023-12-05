var ctx;
var bicho = new Image();
var canvas;
var ancho, alto;
var cero = 0;
var x, y;
var ratonx;
var ratony;
var puntos=0;
var tiempo=60;

window.onload = function () {
  canvas = document.getElementById("canvas1");
  bicho.src = "media/bicho.png";
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    bicho.onload = function () {
      ancho = canvas.width - 100;
      alto = canvas.height - 100;
      y = getRandomNumber(0, alto);
      x = getRandomNumber(0, ancho);
      dibujarBicho(x, y);
      escribitText();
      puntos++;
    };
    canvas.addEventListener("click", (e) => {
      let ratonx = e.offsetX;
      let ratony = e.offsetY;
      if (ratonx >= x - 46 && ratonx <= x + 46 && ratony >= y - 62.5 && ratony <= y + 62.5) {
        matarBicho();
        y = getRandomNumber(0, alto);
        x = getRandomNumber(0, ancho);
        dibujarBicho(x, y);
        escribitText();
        puntos++;
      }
    });
  } else {
    alert("Error en el código o en ctx");
  }
};

function matarBicho() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function dibujarBicho(x, y) {
  ctx.drawImage(bicho, x, y);
}

function escribitText(){
    ctx.font="30pt Verdana";
	ctx.fillStyle = "white";
	ctx.fillText("Puntos: "+puntos,10,40,65);
}