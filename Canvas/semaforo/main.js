
var ctx;
var cont = 0;
var contSwitcher = 0;

var switcher = false;
window.onload = function (){
    const standButton = document.getElementById('standButton');
    var canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
    }



    function trafficLight(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = 'black';

        ctx.beginPath()
        ctx.moveTo(300,300)
        ctx.lineTo(300,600)
        ctx.lineTo(450,600)
        ctx.lineTo(450,300)
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    function post(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(350,600);
        ctx.lineTo(350,800);
        ctx.lineTo(400,800);
        ctx.lineTo(400,600);
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    function greenLight(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = '#5ff20a';
        ctx.beginPath();
        ctx.arc(375, 530, 35, 0, 2 * Math.PI);
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    function yellowLight(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(375, 450, 35, 0, 2 * Math.PI);
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    function redLight(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(375, 370, 35, 0, 2 * Math.PI);
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    function BackgreenLight(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(375, 530, 35, 0, 2 * Math.PI);
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    function BackyellowLight(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = '#a3a811';
        ctx.beginPath();
        ctx.arc(375, 450, 35, 0, 2 * Math.PI);
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    function BackredLight(){
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = '#bd2f04';
        ctx.beginPath();
        ctx.arc(375, 370, 35, 0, 2 * Math.PI);
        ctx.stroke() 
        ctx.fill()
        ctx.closePath();
    }

    trafficLight()
    post()


    setInterval(function(){

        if(switcher){

            let contSwitcher = 0; // Inicializa el contador

            let yellowInter = setInterval(function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                console.log('First' + contSwitcher);
                
                if (contSwitcher === 0) {
                    trafficLight();
                    BackgreenLight();
                    BackredLight();
                    post();

                    yellowLight();
                    contSwitcher = 1;
                } else if (contSwitcher === 1) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    trafficLight();
                    BackgreenLight();
                    BackredLight();
                    post();

                    BackyellowLight();
                    contSwitcher = 0;
                }

                console.log(contSwitcher);
            }, 3000);
            
        }else{
            cont++;
            if(cont == 0){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                trafficLight()
                post()
                greenLight()
                BackyellowLight()
                BackredLight()
                
            }
            if(cont == 1){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                trafficLight()
                post()
                redLight()
                BackgreenLight()
                BackyellowLight()
            
    
            }
            if(cont == 2){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                trafficLight()
                post()
                yellowLight()
                BackgreenLight()
                BackredLight()
            }
            if(cont == 2){
                cont=-1;
            }
        }


        
        
        
    },1000);

    standButton.addEventListener('click',() => {
        if(switcher){
            switcher = false;
            console.log(switcher);
        }else{
            switcher =  true;
            console.log(switcher);
        }
    })
}