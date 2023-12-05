var ctx;
let x = 260;
let y = 260;
var angle = 0;
let shot = true;
window.onload = function () {
    var canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
    }


    function makeTank(x,y,angle){
        wheel1();
        wheel2();
        bodyTank();
        canonBlast2(x,y,75,angle);
        turretComponent();
        
    }

    function wheel1(){
        ctx.strokeStyle='black';
        ctx.fillStyle='green';
        
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.lineTo(300, 200);
        ctx.lineTo(300, 225);
        ctx.lineTo(200, 225);
        ctx.stroke()
        ctx.fill();
        ctx.closePath();
    }

    function wheel2(){
        ctx.strokeStyle='black';
        ctx.fillStyle='green';
        
        ctx.beginPath();
        ctx.moveTo(200, 300);
        ctx.lineTo(300, 300);
        ctx.lineTo(300, 325);
        ctx.lineTo(200, 325);
        ctx.stroke()
        ctx.fill();
        ctx.closePath();
    }

    function bodyTank(){
        ctx.strokeStyle='black';
        ctx.fillStyle='#184217';
        
        ctx.beginPath();
        ctx.moveTo(285, 225);
        ctx.lineTo(285,300)
        ctx.lineTo(225,300)
        ctx.lineTo(225,225)
        ctx.stroke()
        ctx.fill();
        ctx.closePath();
    }

    function turretComponent(){
        ctx.strokeStyle='black';
        ctx.fillStyle='#184217';
        
        ctx.beginPath();
        ctx.arc(255, 260, 20, 0, 2 * Math.PI);
        ctx.stroke()
        ctx.fill();
        ctx.closePath();
    
    }

    function canonBlast(angle){
        ctx.strokeStyle='black';
        ctx.fillStyle='#184217';
        
        ctx.beginPath();
        ctx.moveTo(250, 255);
        ctx.lineTo(250,265);
        ctx.lineTo(340,265); //
        ctx.lineTo(340,255); //
        ctx.lineTo(250, 255);
        ctx.rotate()
        ctx.stroke();
        ctx.fill();
        ctx.closePath()
    }

    function canonBlast2 (x,y, longitud,angle) {
        ctx.strokeStyle='black';
        ctx.fillStyle='#184217';
        ctx.lineWidth=2;
        
      
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo(x + (Math.cos(angle) * longitud), y + (Math.sin(angle) * longitud) )
        ctx.stroke()
        ctx.closePath()
    }
  
    
    makeTank(x,y,angle)

    document.addEventListener('keydown', function(e){
        if (e.key == 'ArrowUp'){
            ctx.clearRect(0, 0, 800, 800);
            console.log(angle);
            angle-=0.05;
            makeTank(x,y,angle)
        }
    });

    document.addEventListener('keydown', function(e){
        if (e.key == 'ArrowDown'){
            ctx.clearRect(0, 0, 800, 800);
            angle+=0.05;
            console.log(angle);
            makeTank(x,y,angle)
        }
    });

    function proyectile(x, y, longitud, angle) {
        const speed = 2; // Velocidad del proyectil
        var proX = x + (Math.cos(angle) * longitud)+ longitud;
        var proY = y + (Math.sin(angle) * longitud);
    
        // Dibuja el proyectil como un círculo
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'red'; // Puedes ajustar el color del proyectil
        ctx.beginPath();
        ctx.arc(proX, proY, 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
        // Mueve el proyectil en la dirección especificada
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
    
        // Actualiza la posición del proyectil en cada fotograma
        function moveProyectile() {
            proX += vx;
            proY += vy;
    
            // Dibuja el proyectil en su nueva posición
            ctx.clearRect(0, 0, 800, 800);
            makeTank(x, y, angle);
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(proX, proY, 5, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
    
            // Verifica si el proyectil está dentro del área deseada o colisiona con algo
            if (proX >= 0 && proX <= 800 && proY >= 0 && proY <= 800) {
                requestAnimationFrame(moveProyectile);
                
            }else{
                shot = true;
            }
        }
    
        if(shot){
            moveProyectile();
            shot = false;
        }
    }
    
    // Llamada de ejemplo para disparar el proyectil
    document.addEventListener('keydown', function (e) {
        if (e.key == 'ArrowLeft') {
            proyectile(x, y, 30, angle); // Llamada para disparar el proyectil
        }
    });
    
   
    document.addEventListener('keydown', function(e){
        if (e.key == 'Space'){
            console.log('Boooming')
        }
    });
}