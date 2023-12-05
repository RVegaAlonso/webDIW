window.onload = function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "red";
    ctx.strokeStyle= "black";
    ctx.lineWidth= 2;

    ctx.beginPath();
    ctx.moveTo(180, 780);
    ctx.lineTo(200, 700);
    ctx.lineTo(350, 700);
    ctx.lineTo(370, 780);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.moveTo(200, 700);
    ctx.lineTo(210, 610);
    ctx.lineTo(340, 610);
    ctx.lineTo(350, 700);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "red";

    ctx.beginPath();
    ctx.moveTo(210, 610);
    ctx.lineTo(230, 530);
    ctx.lineTo(320, 530);
    ctx.lineTo(340, 610);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.moveTo(230, 530);
    ctx.lineTo(235, 450);
    ctx.lineTo(315, 450);
    ctx.lineTo(320, 530);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "blue";

    ctx.beginPath();
    ctx.moveTo(230, 450);
    ctx.lineTo(230, 440);
    ctx.lineTo(320, 440);
    ctx.lineTo(320, 450);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(170, 790);
    ctx.lineTo(170, 780);
    ctx.lineTo(380, 780);
    ctx.lineTo(380, 790);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "yellow";

    ctx.beginPath();
    ctx.moveTo(240, 440);
    ctx.lineTo(240, 380);
    ctx.lineTo(310, 380);
    ctx.lineTo(310, 440);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle= "blue";

    ctx.beginPath();
    ctx.moveTo(220, 380);
    ctx.lineTo(275, 340);
    ctx.lineTo(275, 340);
    ctx.lineTo(330, 380);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}

function cambiarFaro(){
    ctx.fillStyle = "RGB(0,255,255)";

    ctx.beginPath();
    ctx.moveTo(240, 440);
    ctx.lineTo(240, 380);
    ctx.lineTo(310, 380);
    ctx.lineTo(310, 440);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}