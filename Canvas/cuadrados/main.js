window.onload = function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const rectWidth = 210;
    const rectHeight = 150;
    const colores = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'purple', 'white', 'olive', 'firebrick', 'tomato', 'darkcyan', 'cornflowerblue', 'blueviolet'];

    function dibujarRectangulo(x, y, color) {
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.5;
        ctx.fillRect(x, y, rectWidth, rectHeight);
        ctx.globalAlpha = 1;
    }

    function dibujarUnidos(x, y) {
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * colores.length);
            dibujarRectangulo(x, y, colores[randomIndex]);
            x += rectWidth * 0.5;
            y += rectHeight * 0.5;
        }
    }

    dibujarUnidos(30, 40);

    const speedSlider = document.getElementById('speed');
    let velocidad = parseInt(speedSlider.value);

    speedSlider.addEventListener('input', function() {
        velocidad = parseInt(this.value);
    });

    setInterval(function(){
        ctx.clearRect(20, 20, canvas.width, canvas.rectHeight);
        dibujarUnidos(30, 40);
        console.log(velocidad);
    }, velocidad * 10);
};
