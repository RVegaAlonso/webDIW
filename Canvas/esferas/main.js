var radius = 200;
var radiusM = 50;
var angle = 0;

window.onload = function () {
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");

  if (canvas && canvas.getContext) {
    function circulo1() {
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.lineWidth = 5;
      ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);
      ctx.stroke();
    }

    function circulo2() {
      ctx.beginPath();
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 5;

      let x = canvas.width/2 + Math.cos(angle) * (radius - radiusM);
      let y = canvas.height/2 + Math.sin(angle) * (radius - radiusM);
      
      ctx.arc(x, y, radiusM, 0, 2*Math.PI);
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circulo1();

      
      angle += 0.01;

      circulo2();

      requestAnimationFrame(animate);
    }

    animate();
  }
};
