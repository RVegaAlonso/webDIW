var ctx;
var radio = 32;
var bolax = 100;
var bolay = 150;
var bolax1 = 100;
var bolay1 = 300;
var color = "red";
var dx = 3;
var dy = 3;
var barraY = 70;
var barraAltura = 60;
var ancho, alto;
var limiteder, limiteizq, limiteup, limitedown;
var rebotes = 0;
var score = 0; // Variable para el marcador

window.onload = function () {
  let canvasElement = document.getElementById("canvas1");
  if (canvasElement && canvasElement.getContext) {
    ctx = canvasElement.getContext("2d");

    if (ctx) {
      var bolaimage = new Image();
      ctx.lineWidth = radio;
      ctx.fillStyle = color;

      ancho = canvasElement.width;
      alto = canvasElement.height;

      limiteder = ancho - radio;
      limiteizq = 0;

      limiteup = 0;
      limitedown = alto - radio;

      bolaimage.src = "media/bola.png";

      document.addEventListener("keydown", function (event) {
        switch (event.key) {
          case "ArrowUp":
            if (barraY > 0) barraY -= 25;
            break;
          case "ArrowDown":
            if (barraY + barraAltura < alto) barraY += 25;
            break;
        }
      });

      bolaimage.onload = function () {
        setInterval(function () {
          ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
          bolax += dx;
          bolay += dy;

          ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
          bolax1 += dx;
          bolay1 += dy;

          verifica();
          comprobarColision();
          dibujarBarras();

          ctx.beginPath();
          ctx.drawImage(bolaimage, bolax, bolay, 40, 40);
          ctx.fill();

          ctx.font = "20px Arial";
          ctx.fillStyle = "white";
          ctx.fillText("Marcador: " + score, 10, 20);
        }, 10);
      };

      function verifica() {
        var nbolax = bolax + dx;
        var nbolay = bolay + dy;
        if (nbolax > limiteder) {
          dx *= -1;
          nbolax = limiteder;
        }
        if (nbolax < limiteizq) {
          dx *= -1;
          nbolax = limiteizq;
          score--;
          if (score <= -10) {
            alert("Has perdido");
            return;
          }
        }
        if (nbolay > limitedown) {
          dy *= -1;
          nbolay = limitedown;
        }
        if (nbolay < limiteup) {
          dy *= -1;
          nbolay = limiteup;
        }
      }

      function comprobarColision() {
        var bolaRect = { x: bolax, y: bolay, width: 40, height: 40 };
        var barraRect = { x: 20, y: barraY, width: 10, height: barraAltura };

        if (
          bolaRect.x < barraRect.x + barraRect.width &&
          bolaRect.x + bolaRect.width > barraRect.x &&
          bolaRect.y < barraRect.y + barraRect.height &&
          bolaRect.y + bolaRect.height > barraRect.y
        ) {
          score++;
          dx = -dx;
          rebotes++;
          if (rebotes % 2 === 0) {
            dx *= 1.2;
            dy *= 1.2
          }
        }
      }

      function dibujarBarras() {
        ctx.beginPath();
        ctx.rect(20, barraY, 10, barraAltura);
        ctx.fillStyle = "white";
        ctx.fill();
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function() {
    reiniciarJuego();
  },);

function reiniciarJuego() {
    bolax = 100;
    bolay = 150;
    bolax1 = 100;
    bolay1 = 300;
    rebotes = 0;
    score = 0;
}
})