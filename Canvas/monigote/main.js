
window.onload = function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    let sonrisaVisible = true;
    var booleanAnim = true;
  
  
    function defaultCanvas() {
  

      ctx.beginPath();
      ctx.arc(100, 32, 12, 0.2 * Math.PI, 0.8 * Math.PI);
      ctx.strokeStyle = 'white';
      ctx.stroke();
  
        

      ctx.beginPath();
      ctx.moveTo(100, 60);
      ctx.lineTo(70, 80);
      ctx.moveTo(100, 60);
      ctx.lineTo(130, 80);
      ctx.strokeStyle = 'white';
      ctx.stroke();
  
    }
  
    function dibujarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  

      ctx.beginPath();
      ctx.arc(100, 30, 20, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.stroke();
  

      ctx.beginPath();
      ctx.moveTo(100, 50);
      ctx.lineTo(100, 100);
      ctx.strokeStyle = 'white';
      ctx.stroke();
  
        // Piernas
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(70, 140);
        ctx.moveTo(100, 100);
        ctx.lineTo(130, 140);
        ctx.strokeStyle = 'white';
        ctx.stroke();
  
  
        ctx.beginPath();
        ctx.arc(90, 25, 2, 0, Math.PI * 3);
        ctx.arc(110, 25, 2, 0, Math.PI *2);
        ctx.fillStyle = 'white';
        ctx.fill();
  
        if (sonrisaVisible) {
          defaultCanvas();
        }else{
          ctx.beginPath();
          ctx.arc(100, 40, 5, 0, 2 * Math.PI);
          ctx.strokeStyle = 'white';
          ctx.fillStyle = 'red'
          ctx.fill();
  
  
  

          ctx.beginPath();
          ctx.moveTo(100, 60);
          ctx.lineTo(70, 40);
          ctx.moveTo(100, 60);
          ctx.lineTo(130, 40);
          ctx.strokeStyle = 'white';
          ctx.stroke();
        }
    }
  
    var interval = null;
  
    document.addEventListener('keydown', function (event) {
      if (event.key === ' ') {
          if(booleanAnim == true){
  
            sonrisaVisible = !sonrisaVisible;
            dibujarCanvas();
            interval = 1000;       
            
            if(interval != null){
              intervalo = setInterval(function() {
                sonrisaVisible = !sonrisaVisible;
                dibujarCanvas();
              },interval);
            
            }
            booleanAnim = false;
          }else{
            clearInterval(intervalo);
            booleanAnim = true;
          }
  
      }
    });
  
  
    
    dibujarCanvas();
  }