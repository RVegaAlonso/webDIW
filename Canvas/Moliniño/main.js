window.onload = function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  console.log(ctx.width);
  const colores = [
    "#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF",
    "#800080", "#FF00FF", "#00FFFF", "#808080", "#FFFFFF",
    "#FF4500", "#FFD700", "#ADFF2F", "#7FFF00", "#00FF7F",
    "#87CEEB", "#6A5ACD", "#8A2BE2", "#FF69B4", "#FF1493",
    "#DC143C", "#A52A2A", "#8B4513", "#D2691E", "#FF6347"
  ];

  const nubeImg = new Image();
      nubeImg.src = "images/cloud.png"

      const nubes = [
        { x: 50, y: 50, velocidad: 1 },
        { x: 200, y: 100, velocidad: 0.5 },
        { x: 350, y: 70, velocidad: 0.8 },
        { x: 30, y: 200, velocidad: 0.7 },
        { x: 100, y: 150, velocidad: 1.2 },
        { x: 240, y: 90, velocidad: 0.3 },
        { x: 10, y: 20, velocidad: 0.3 },
        { x: 20, y: 130, velocidad: 0.3 },
        { x: 90, y: 250, velocidad: 0.5 },
        { x: 300, y: 180, velocidad: 0.6 },
        { x: 120, y: 50, velocidad: 0.9 },
        { x: 180, y: 220, velocidad: 1.1 },
        { x: 260, y: 130, velocidad: 0.4 },
        { x: 50, y: 100, velocidad: 0.5 },
        { x: 400, y: 80, velocidad: 0.7 },
        { x: 160, y: 230, velocidad: 0.8 },
        { x: 350, y: 180, velocidad: 0.5 },
        { x: 80, y: 90, velocidad: 0.6 },
      ];
      
  
  function dibujarFondo(){
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, 300, 400, 100);
  }

  function dibujarNubes() {
    for (let i = 0; i < nubes.length; i++) {
      ctx.drawImage(nubeImg, nubes[i].x, nubes[i].y, 50, 30); 


      nubes[i].x += nubes[i].velocidad;


      if (nubes[i].x > canvas.width) {
        nubes[i].x = -50;
      }
    }
  }

  canvas.width = 400;
  canvas.height = 400;
  let anguloRotacion = 0;

  function dibujarMolinillo(x, y, longitud) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + longitud);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';
    ctx.stroke();

    for (let i = 0; i < 4; i++) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(anguloRotacion + (i * Math.PI)/2);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(40, -longitud / 2);
      ctx.lineTo(0, -longitud / 2);
      ctx.closePath();
      let randomIndex = Math.floor(Math.random() * colores.length);
      ctx.fillStyle = colores[randomIndex];
      ctx.fill();

      ctx.restore();
    }
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarFondo();
    dibujarNubes();
    dibujarMolinillo(200, 200, 100);
    anguloRotacion += 0.01;
    requestAnimationFrame(animar);
  }

  nubeImg.onload = function () {
    animar();
  };

  animar();

}
