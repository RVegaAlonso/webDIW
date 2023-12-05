# Proyecto: Punto Juegos

## Información Personal:
- **Nombre:** Ricardo Vega Alonso
- **Fecha:** 05/12/2023

## Anotación: Se debe leer en preview para comprender. En su defecto es mejor ver el PDF

---

## Índice:

### 1. Estructura general
   - [Canvas](#canvas)
   - [Css](#css)
   - [Media](#media)
   - [Pages](#pages)
   - [Templates](#templates)
   - [Video](#video)

### 2. Canvas
   - [Bicho](#bicho)
   - [Cuadrado](#cuadrado)
   - [Esferas](#esferas)
   - [Faro](#faro)
   - [Molinillo](#molinillo)
   - [Monigote](#monigote)
   - [Pong](#pong)
   - [Semaforo](#semaforo)
   - [Tanque](#tanque)

### 3. CSS
   - [Ej2](#ej2)
   - [Ej3](#ej3)
   - [Ej4](#ej4)
   - [Ej5](#ej5)
   - [Ej6](#ej6)
   - [Ej7](#ej7)
   - [Ej8](#ej8)
   - [Ej9](#ej9)
   - [Ej10](#ej10)

### 4. Sitemap

---

## Estructura general

![[Pasted image 20231205130022.png]]

En este caso se puede observar como se organiza la página, cada carpeta contiene lo que se describe en su nombre, por ejemplo, en caso de la carpeta canvas contiene todos los elementos que forman parte de los ejercicios, dentro de una estructura Carpeta=>(HTML,JS). Los ficheros exteriores se componen del index de html, es decir la página principal, del javascript principal, del sitemap.xml, y de la rama de estilos css principal del código.

---

## Canvas

### Bicho

El proyecto bichos se compone de la siguiente forma:

#### Variables

```javascript 
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
```

- `ctx`: Contexto del lienzo de dibujo.
- `bicho`: Objeto de imagen para representar al "Bicho".
- `canvas`: Elemento del lienzo HTML.
- `ancho`, `alto`: Dimensiones del lienzo.
- `cero`: Variable no utilizada.
- `x`, `y`: Coordenadas actuales del "Bicho".
- `ratonx`, `ratony`: Coordenadas del ratón.
- `puntos`: Contador de puntos.
- `tiempo`: Contador de tiempo (60 segundos).

#### Función de Carga al Inicio


```javascript 
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
}
```

- Al cargar la ventana, se ejecuta el código dentro de esta función.

#### Obtención del Elemento del Canvas y Carga de la Imagen del "Bicho"

```javascript 
canvas = document.getElementById("canvas1"); bicho.src = "media/bicho.png";
```

- Se obtiene el elemento del lienzo con el id "canvas1".
- Se asigna la ruta de la imagen del "Bicho" al objeto de imagen.

#### Verificación de la Capacidad del Contexto del Canvas

```javascript 
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
}
```

- Se verifica si el elemento canvas y su contexto están disponibles.

#### Configuración del Contexto y Carga de la Imagen del "Bicho" al Completarse

```javascript 
ctx = canvas.getContext("2d"); bicho.onload = function () { ... }
```

- Se obtiene el contexto 2D del canvas.
- Cuando la imagen del "Bicho" se carga, se configuran dimensiones iniciales y se dibuja en el canvas.

#### Manejo del Clic en el Canvas

```javascript 
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
}
```

- Se agrega un evento de clic al canvas.
- Si el clic ocurre dentro de las coordenadas del "Bicho", se llama a la función matarBicho() y se actualizan las coordenadas y puntos.

#### Función para "Matar" el "Bicho"

```javascript 
function matarBicho() { 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
```

- Limpia el contenido del canvas.

#### Función para Obtener un Número Aleatorio Dentro de un Rango

```javascript 
function getRandomNumber(min, max) { 
	return Math.random() * (max - min) + min;
}
```

- Devuelve un número aleatorio entre los valores dados.

#### Función para Dibujar el "Bicho" en una Posición Específica

```javascript 
function dibujarBicho(x, y) { 
	ctx.drawImage(bicho, x, y);
}
```

- Dibuja la imagen del "Bicho" en las coordenadas dadas.

#### Función para Escribir el Texto de Puntos en el Canvas

```javascript 
function escribitText() {
  ctx.font="30pt Verdana";
  ctx.fillStyle = "white";
  ctx.fillText("Puntos: "+puntos,10,40,65);
}
```

- Configura el texto que muestra los puntos en el canvas.

- Este código implementa un juego interactivo donde el objetivo es hacer clic en un "Bicho" que aparece en el canvas. El código maneja la carga de la imagen del "Bicho", la detección de clics y la actualización de puntos.
### Cuadrado

#### Variables

```javascript 
const canvas = document.getElementById('canvas1'); 
const ctx = canvas.getContext('2d'); 
const rectWidth = 210; 
const rectHeight = 150; 
const colores = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'purple', 'white', 'olive', 'firebrick', 'tomato', 'darkcyan', 'cornflowerblue', 'blueviolet'];
```

- `ctx`: Contexto del lienzo de dibujo.
- `rectWidth`: Ancho del cuadrado.
- `rectHeight`: Alto del cuadrado.
- `colores`: Paleta de colores.

#### Función dibujar cuadrado

```javascript 
function dibujarRectangulo(x, y, color) {     
ctx.fillStyle = color;     ctx.globalAlpha = 0.5;     
ctx.fillRect(x, y, rectWidth, rectHeight);     
ctx.globalAlpha = 1; 
}
```

- **Parámetros:**
    
    - `x`, `y`: Coordenadas de la esquina superior izquierda del rectángulo.
    - `color`: Color del rectángulo.
- **Descripción:**
    
    - Dibuja un rectángulo en el contexto del canvas con las coordenadas y color especificados.
    - Aplica una opacidad global al rectángulo.

#### Función para dibujar unidos

```javascript 
function dibujarUnidos(x, y) {     
	for (let i = 0; i < 6; i++) {         
		let randomIndex = Math.floor(Math.random() * colores.length);
		dibujarRectangulo(x, y, colores[randomIndex]);         
		x += rectWidth * 0.5;         
		y += rectHeight * 0.5;     
	} 
}
```

- **Parámetros:**
    
    - `x`, `y`: Coordenadas iniciales de la serie de rectángulos.
- **Descripción:**
    
    - Dibuja los rectángulos unidos en el canvas.
    - Utiliza colores aleatorios del array de colores.
    - Ajusta las coordenadas para que los rectángulos estén unidos.

#### Función window.onload

```javascript 
window.onload = function () { ... }
```

- **Descripción:**
    - Función que se ejecuta al cargar la ventana.

#### setInterval

```javascript 
setInterval(function(){     
	ctx.clearRect(20, 20, canvas.width, canvas.rectHeight);     
	dibujarUnidos(30, 40);     
	console.log(velocidad); }, 
velocidad * 10);
```

- **Descripción:**
    - Establece un intervalo para borrar y redibujar los rectángulos con la velocidad definida.
    - Borra el contenido del canvas en un área específica.
    - Llama a la función dibujarUnidos con nuevas coordenadas.
    - Imprime la velocidad en la consola.

### Esferas

#### Variables

```javascript 
var radius = 200;
var radiusM = 50;
var angle = 0;
```

- `radius`: Radio esfera mayor.
- `radiusM`: Radio esfera menor.
- `angle`: Ángulo inicial.

#### Función circulo1

```javascript 
function circulo1() {   
	ctx.beginPath();   
	ctx.strokeStyle = "red";   
	ctx.lineWidth = 5;   
	ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);   ctx.stroke(); 
}
```

- **Descripción:**
    - Dibuja un círculo rojo en el centro del canvas.
    - Define el color, grosor de línea y radio del círculo.

#### Función circulo2

```javascript 
function circulo2() {   
	ctx.beginPath();   
	ctx.strokeStyle = "blue";   
	ctx.lineWidth = 5;    
	let x = canvas.width/2 + Math.cos(angle) * (radius - radiusM);   
	let y = canvas.height/2 + Math.sin(angle) * (radius - radiusM);      
	ctx.arc(x, y, radiusM, 0, 2*Math.PI);   
	ctx.stroke(); }
```

- **Descripción:**
    - Dibuja un círculo azul alrededor del círculo rojo.
    - Utiliza coordenadas calculadas en función del ángulo y la diferencia de radio entre ambos círculos.

#### Función animate()

```javascript 
function animate() {   
	ctx.clearRect(0, 0, canvas.width, canvas.height);    
	circulo1();      
	angle += 0.01;    
	circulo2();    
	requestAnimationFrame(animate); 
}
```

- **Descripción:**
    - Limpia el canvas en cada fotograma para animar los círculos.
    - Llama a las funciones circulo1() y circulo2() para dibujar los círculos en posiciones actualizadas.
    - Incrementa el ángulo para animar la rotación del círculo azul.
    - Utiliza requestAnimationFrame para solicitar la próxima animación.

#### Función window.onload

```javascript 
window.onload = function () { ... }
}
```

- **Descripción:**
    - Función principal que se ejecuta al cargar la ventana.
    - Obtiene el elemento canvas y su contexto 2D.
    - Verifica la disponibilidad del contexto antes de proceder.
    - Llama a la función animate() para iniciar la animación de los círculos.

### Faro

#### Función 

```javascript 
ctx.beginPath();
    ctx.moveTo(180, 780);
    ctx.lineTo(200, 700);
    ctx.lineTo(350, 700);
    ctx.lineTo(370, 780);
    ctx.closePath();
ctx.stroke();
ctx.fill();
```

- Aquí solo existe una función repetida a base de parámetros que consiste en:
- `beginPath`: Comienza la instrucción de dibujo.
- `moveTo`: Dibuja la línea superior.
- `lineTo`: Dibuja las líneas laterales e inferior.
- `closePath`: Cierra la instrucción.
- `stroke`: Dibuja la línea.
- `fill`: Dibuja el color interior.
### Molinillo
#### Variables

```javascript 
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
```

- `ctx`: Contexto del lienzo de dibujo.
- `colores`: Arreglo de códigos hexadecimales que representan colores.
- `nubeImg`: Imagen de una nube.
- `nubes`: Array de objetos que representan las nubes en el cielo.
- `anguloRotacion`: Ángulo de rotación utilizado en la función.

#### Función dibujarFondo()  


```javascript 
function dibujarFondo(){       
	ctx.fillStyle = '#87CEEB';     
	ctx.fillRect(0, 0, 400, 300);     
	ctx.fillStyle = '#228B22';     
	ctx.fillRect(0, 300, 400, 100); 
}
```

- **Descripción:**
    - Dibuja el fondo del cielo y la hierba en el canvas.

#### Función dibujarNubes()`

```javascript 
function dibujarNubes() {    
	for (let i = 0; i < nubes.length; i++) {       
		ctx.drawImage(nubeImg, nubes[i].x, nubes[i].y, 50, 30);        
		nubes[i].x += nubes[i].velocidad;       
		if (nubes[i].x > canvas.width) {         
			nubes[i].x = -50;
		}     
	} 
}
```

- **Descripción:**
    - Dibuja las nubes en el canvas y las desplaza horizontalmente.
    - Si una nube sale del canvas, se reposiciona al inicio.

#### Función dibujarMolinillo(x, y, longitud)

```javascript 
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
```

- **Descripción:**
    - Dibuja un molinillo con aspas de colores.
    - Utiliza rotación y traslación para posicionar las aspas correctamente.

#### Función animar()

```javascript 
function animar() {    
	ctx.clearRect(0, 0, canvas.width, canvas.height);     
	dibujarFondo();     
	dibujarNubes();     
	dibujarMolinillo(200, 200, 100);     
	anguloRotacion += 0.01;     
	requestAnimationFrame(animar); 
}
```

- **Descripción:**
    - Limpia el canvas y anima elementos llamando a las funciones previas.
    - Incrementa el ángulo de rotación y solicita la próxima animación.

#### Función window.onload`

```javascript 
function animar() {    
window.onload = function () { ... }
}
```

- **Descripción:**
    - Función principal que se ejecuta al cargar la ventana.
    - Inicializa variables y llama a la función animar.

### Monigote

#### Variables

```javascript 
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    let sonrisaVisible = true;
    var booleanAnim = true;
```

- `canvas`: Elemento del DOM que representa el lienzo. 
- `ctx`: Contexto 2D del canvas.
- `sonrisaVisible`: Variable booleana que determina si la sonrisa está visible o no. 
- `booleanAnim`: Variable booleana que controla el estado de la animación.

#### Función defaultCanvas()  

```javascript 
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
```

- **Descripción:**
    - Dibuja una boca cerrada predeterminada con dos líneas curvas.

#### Función dibujarCanvas()`

```javascript 
function dibujarCanvas() {   
	ctx.clearRect(0, 0, canvas.width, canvas.height);       
	ctx.beginPath();   ctx.arc(100, 30, 20, 0, Math.PI * 2);   
	ctx.strokeStyle = 'white';   
	ctx.stroke();    
	ctx.beginPath();   
	ctx.moveTo(100, 50);   
	ctx.lineTo(100, 100);   
	ctx.strokeStyle = 'white';   
	ctx.stroke();      
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
	} else {          
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
}
```

- **Descripción:**
    - Limpia el canvas y dibuja la cara y el cuerpo del personaje.
    - Dibuja una boca sonriente o cerrada según el estado de `sonrisaVisible`.

#### Evento `keydown` y Control de Animación

```javascript 
document.addEventListener('keydown', function (event) {   if (event.key === ' ') {       
   
if (booleanAnim == true) {         
	sonrisaVisible = !sonrisaVisible;         
	dibujarCanvas();         
	interval = 1000;                         
	if (interval != null) {           
		intervalo = setInterval(function() {             
		sonrisaVisible = !sonrisaVisible;             
		dibujarCanvas();           
	}, interval);                  
	}         
	booleanAnim = false;       
	} else {         
		clearInterval(intervalo);         
		booleanAnim = true;       
	}   
	} });
```

- **Descripción:**
    - Detecta el evento de tecla presionada (`keydown`).
    - Cambia el estado de `sonrisaVisible` y controla la animación al presionar la tecla Espacio.
### Pong

#### Variables Globales:

```javascript 
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
var score = 0;
```

- `ctx`: Contexto 2D del canvas.
- `radio`: Radio de la bola.
- `bolax`, `bolay`: Coordenadas de la bola.
- `bolax1`, `bolay1`: Coordenadas de la segunda bola.
- `color`: Color de la bola.
- `dx`, `dy`: Componentes de velocidad de la bola.
- `barraY`: Posición vertical de la barra.
- `barraAltura`: Altura de la barra.
- `ancho`, `alto`: Dimensiones del canvas.
- `limiteder`, `limiteizq`, `limiteup`, `limitedown`: Límites del canvas.
- `rebotes`: Contador de rebotes.
- `score`: Puntuación del juego.

#### Función window.onload

```javascript 
window.onload = function () {   // ... (código anterior) };
```

- **Descripción:**
    - Inicializa el juego cuando se carga la ventana.
    - Configura el contexto 2D, eventos de teclado y realiza la animación del juego.

#### Función bolaimage.onload

```javascript 
bolaimage.onload = function () {   setInterval(function () {  ...   }, 10); };
```

- **Descripción:**
    - Define la animación del juego mediante un bucle de intervalos.
    - Dibuja la bola, verifica límites, maneja colisiones y actualiza la puntuación.

#### Función verifica

```javascript 
function verifica() { ...}
```

- **Descripción:**
    - Verifica y ajusta las coordenadas de la bola para mantenerla dentro de los límites del canvas.

#### 4. Función comprobarColision

```javascript 
function comprobarColision() {   // ... (código de comprobación de colisión con la barra) }
```

- **Descripción:**
    - Verifica si la bola colisiona con la barra y actualiza la puntuación y velocidad en consecuencia.

#### Función dibujarBarras

```javascript 
function dibujarBarras() {  ... }
```

- **Descripción:**
    - Dibuja la barra en el canvas.

#### Función document.addEventListener`

```javascript 
document.addEventListener("DOMContentLoaded", function() {  ... });
```

- **Descripción:**
    - Añade un evento al botón de reinicio (`resetButton`) para reiniciar el juego.
### Semaforo

#### Variables Globales:

```javascript 
var ctx; 
var cont = 0; 
var contSwitcher = 0; 
var switcher = false;
```

- `ctx`: Contexto 2D del canvas.
- `cont`: Contador para el manejo de cambios en las luces del semáforo.
- `contSwitcher`: Contador específico para la lógica de cambio de luces cuando el interruptor está activado.
- `switcher`: Interruptor para activar/desactivar la lógica de cambio de luces.

#### Función window.onload

```javascript 
window.onload = function () { ... };
```

- **Descripción:**
    - Inicializa la aplicación cuando se carga la ventana.
    - Configura el contexto 2D y los eventos del botón.

##### Función rafficLight`

```javascript 
function trafficLight() {  ... }
```

- **Descripción:**
    - Dibuja el poste y el marco del semáforo en el canvas.

#### Función post`

```javascript 
function post() {  ... }
```

- **Descripción:**
    - Dibuja el poste vertical que sostiene las luces del semáforo.

#### Función greenLight

```javascript 
function greenLight() {  ... }
```

- **Descripción:**
    - Dibuja la luz verde del semáforo.

#### Función yellowLight

```javascript 
function yellowLight() {  ... }
```

- **Descripción:**
    - Dibuja la luz amarilla del semáforo.

#### Función redLight

```javascript 
function redLight() {  ... }
```

- **Descripción:**
    - Dibuja la luz roja del semáforo.

#### Función BackgreenLight, BackyellowLight, BackredLight

```javascript 
function BackgreenLight() {  ... }
function BackyellowLight() {  ... } 
function BackredLight() {  ... }
```

- **Descripción:**
    - Dibujan las luces de fondo para simular el efecto de encendido/apagado.

#### Función de Cambio Automático de Luces

```javascript 
setInterval(function(){ ... }, 1000);
```

- **Descripción:**
    - Realiza cambios automáticos de luces según el estado del interruptor (switcher).
    - Maneja el cambio de luces y lógica de temporización.

#### Evento del Botón (standButton)

```javascript 
standButton.addEventListener('click',() => { ... });
```

- **Descripción:**
    - Activa/desactiva el interruptor (switcher) al hacer clic en el botón de "stand".

---

## CSS

### Ej2

El ejercicio 2 está recogido dentro de Page/CSS/ej2. este se compone de la siguiente forma

```css
.boxel{
  position: absolute;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}

.caja-1{
  top: 160px;
  left:170px;
  background-color: yellow !important;
  z-index: 1;

}

.caja-2{
  top: 200px;
  left: 220px;
  background-color: rgb(255, 0, 0) !important;
  z-index: 2;
}

.caja-3{
  top: 240px;
  left: 270px;
  background-color: rgb(0, 0, 255) !important;
  z-index: 3;
}

.espacio{
  padding: 8%;
}
```

Mientras que el html se ve representado de la siguiente forma 

```html
      <div class="cosa">
            <div class="boxel caja-1">a</div>
            <div class="boxel caja-2">a</div>
            <div class="boxel caja-3">a</div>
        </div>
        <div class="espacio"></div>
```

El div de clase espacio se usa para evitar que el footer colapse contra los cubículos de el ejercicio. En cuanto al css no es necesario explicar nada en especial debido a que es bastante sencillo
### Ej3

La main page y muchos de los elementos a lo largo de toda la página funcionan de forma reactive ya que se autocomprimen en caso de necesitar por falta de espacio dentro del mismo, gracias al uso de porcentajes. Aquí unos ejemplos:

```css
h2{
  color:#3282B8;
  padding-left: 5%;
}

  

p{
  width: 80%;
  color: #135a8a;
  padding-left: 5%;
}

  

.subtitle {
  color: #BBE1FA;
  margin-left: 30%;
}
```

### Ej4

Este ejercicio está compuesto de forma que se seleccione una página distinta dependiendo de la opción clicada dentro del menú, es decir, dentro del menú se encuentra todo lo necesario para el mismo:

```css
#quickmenu{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding-left: 10%;
  padding-right: 10%;
}
  
#primary_nav_wrap{
  margin-top:15px;
  display: flex;
  justify-content: space-evenly;
}

#primary_nav_wrap ul{
  list-style:none;
  position:relative;
  float:left;
  margin:0;
  z-index: 10;
}

#primary_nav_wrap ul a{
  display:block;
  color:#3282B8;
  text-decoration:none;
  font-weight:700;
  font-size:12px;
  line-height:32px;
  padding:0 45px;
}

  

#primary_nav_wrap ul li{
  position:relative;
  float:left;
  margin:0;
  padding:0
}

  

#primary_nav_wrap ul li:hover{
  background:#323232
}

  

#primary_nav_wrap ul ul{
  display:none;
  position:absolute;
  top:100%;
  left:0;
  background:#1e1e1e;
  padding:0
}

#primary_nav_wrap ul ul li{
  float:none;
  width:200px
}

#primary_nav_wrap ul ul a{
  line-height:120%;
  padding:10px 15px
}

  

#primary_nav_wrap ul ul ul{
  top:0;
  left:100%
}

  

#primary_nav_wrap ul li:hover > ul{
  display:block
}

.superior{
  z-index: 10;
}
```


Y en el html básicamente se elecciona de la siguiente forma:

```css
<h1>Punto Juegos</h1>
<nav id="primary_nav_wrap" class="superior">
<ul>
  <li class="current-menu-item"><a href="../../index.html">Home</a></li>
  <li><a href="#">Canvas</a>
    <ul>
      <li><a href="../../Canvas/pong/index.html">Pong</a></li>
      <li><a href="../../Canvas/monigote/main.html">Stigmata</a></li>
      <li><a href="../../Canvas/Bicho/main.html">Matar bichos</a></li>
      <li><a href="../../Canvas/faro/main.html">Faro</a></li>
      <li><a href="../../Canvas/esferas/main.html">Esferas</a></li>
      <li><a href="../../Canvas/tanque/main.html">Tanque</a></li>
      <li><a href="../../Canvas/cuadrados/main.html">Cuadrados</a></li>
      <li><a href="../../Canvas/semaforo/main.html">Semaforo</a></li>
      <li><a href="../../Canvas/Moliniño/main.html">Molino</a></li>
  </li>
</ul>
  <li><a href="#">CSS</a>
    <ul>
      <li><a href="../CSS/ej2/ej2.html">Ejercicio 2</a></li>  
      <li><a href="../CSS/ej8/fondos.html">Ejercicio 8</a></li>
    </ul>
  </li>
  <li><a href="../Video/video.html">Video</a>
  </li>
  <li><a href="../Pages/aboutUs.html">About Us</a></li>
  <li><a href="#">examen</a>
    <ul>
      <li><a href="../examen/1.html">Ejercicio 1</a></li>  
      <li><a href="../examen/2.html">Ejercicio 2</a></li>
      <li><a href="../examen/3.html">Ejercicio 3</a></li>
    </ul>
</ul>
</nav>
```
### Ej5

El grid se ve tal que así:

```css
#quickmenu{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding-left: 10%;
  padding-right: 10%;
}
```


Dentro del menú, en este caso, también es importante comprender como funciona el Side Bar de la main page, que se compone de esta forma en css y html:

```css
.sidebar {
    background-color: #27363f;
    width: 150px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}

.sidebar h1 {
    color: #BBE1FA;
}

.portfolio {
    background-color:#1B262C;
    position: absolute;
    top: 0;
    left: 150px;
    right: 0;
    bottom: 0;
    -moz-transition: left 0.5s ease;
    transition: left 0.5s ease;
}

input[type=checkbox] {
   display: none;
}

input:checked ~ .portfolio {
    left: 0;
}

input:checked ~ label {
    left: 0;
}

label {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 150px;
    background-color: #3282B8;
    -moz-transition: left 0.5s ease;
    transition: left 0.5s ease;
}
```

Y el html de la main page

```html
    <div class="main-wrap">
  <input id="slide-sidebar" type="checkbox" role="button" />
  <label for="slide-sidebar">
    <span>
      <img src="https://static.thenounproject.com/png/865860-200.png" width="30" height="30">
    </span>
  </label>
  <div class="sidebar">
    <h1>Menu</h1>
    <ul class="footer-links">
      <li><a href="Pages/formulario.html">Log in</a></li>
      <li><a href="Pages/privacidad.html">Politica Privacidad</a></li>
    </ul>
  </div>
  <div class="portfolio">
    {...}
    <h2>Quick menu</h2>
    <div id="quickmenu">
      <div>
        <p>Battle tank</p>
	 <a href="Canvas/tanque/main.html">         <img src="https://media.wired.com/photos/597bbd1e5d0eaa44a68af24d/master/w_2560%2Cc_limit/Newgrounds-TopArt.jpg" width="100" height="150" />
        </a>
      </div>
      <div>
        <p>Magical blocks</p>
        <a href="Canvas/cuadrados/main.html">
          <img src="https://culturacientifica.com/app/uploads/2015/01/imagen-1.jpg" width="100" height="150" />
        </a>
      </div>
      <div>
        <p>Bug Smasher</p>
        <a href="Canvas/Bicho/main.html">
          <img src="https://cdn-icons-png.flaticon.com/512/4832/4832777.png" height="150" width="100" />
        </a>
      </div>
      <div>
        <p>Special circles</p>
        <a href="Canvas/esferas/main.html">
          <img src="https://img.freepik.com/free-photo/abstract-glowing-circles-illuminate-dark-nightclub-walls-generative-ai_188544-9610.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais" height="150" width="100" />
        </a>
      </div>
      <div>
        <p>Stop light</p>
        <a href="Canvas/semaforo/main.html">
          <img src="https://b.kisscc0.com/20180813/hrw/kisscc0-traffic-light-drawing-lamp-railway-semaphore-signa-traffic-semaphore-5b713854179f20.5370368715341466440968.png" height="150" width="100" />
        </a>
      </div>
      <div>
        <p>Pong</p>
        <a href="Canvas/pong/index.html">
          <img src="https://images.pond5.com/black-and-white-pong-game-footage-090361664_iconl.jpeg" height="150" width="100" />
        </a>
      </div>
    </div>
  </div>
</div>

```

Como podemos ver en este caso se usa el elemento de flexbox para que el side menu se pueda mostrar sin que ambos colisionen dentro de la muestra del mismo.
### Ej7

Mirar ejercicio 10....
### Ej8

En este caso para mostrar una imagen o fondo aleatorio la mejor forma de hacerlo a parte de usando el csss es mediante un js que cambie el item aleatoriamente, en este caso está hecho dentro de un elemento a modo de ejemplo debido a que usándolo dentro de el fondo de la página se producen bajadas de rendimiento e incluso crasheos temporales. Por lo tanto he decidido aplicar de esta forma el ejemplo:

```js
    function randombg() {
      var random = Math.floor(Math.random() * 6) + 0;
      var arrayIMG = [
        "url('../../Media/1.svg')",
        "url('../../Media/2.svg')",
        "url('../../Media/3.svg')",
        "url('../../Media/4.svg')",
        "url('../../Media/5.svg')",
        "url('../../Media/6.svg')",
      ];
      document.getElementById("random").style.backgroundImage = arrayIMG[random];
    }
```

En este caso el html se ve así:

```html
    <div id="random"></div>
  <button class="buttonfondo" onclick="randombg()">Cambiar fondo</button>
```
### Ej9

Se usan múltiples de estos casos a lo largo de toda la página, en este caso el ejemplo de los h1 o similares

### Ej10

Junto con el ejercicio 7 se encuentran fusionados dentro de la ventana de log in del side menu de la main page, esto ya que ambos formularios se encuentran dentro de tarjetas, viendose tal que así:

```html
<div>
        <section class="hero-section">
          <div class="card-grid">
            <a class="card">
              <div class="card__background" style="background-color: #0F4C75;"></div>
              <div class="card__content">
                <h2 class="card__heading">Sing-in</h2>
                <form class="card__category">
                    <p>User-Name</p>
                    <input type="text">
                    <p>E-mail</p>
                    <input type="email">
                    <p>Password</p>
                    <input type="password">
                    <p>Confirm password</p>
                    <input type="password">
                    <input type="submit" value="Sing in">
                </form>
              </div>
            </a>
            <a class="card">
              <div class="card__background" style="background-color: #0F4C75;"></div>
              <div class="card__content">
                <h2 class="card__heading">Log-in</h2>
                <form class="card__category">
                    <p>User-Name</p>
                    <input type="text">
                    <p>E-mail</p>
                    <input type="email">
                    <p>Password</p>
                    <input type="password">
                    <input type="submit" value="Log in">
                </form>
              </div>
            </a>
          <div>
        </section>
```


El css se ve tal que así


```css
:root{
  --text-light: rgba(255,255,255,0.6);
  --text-lighter: rgba(255,255,255,0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 1200px;
}

.hero-section{
  border-radius: 10%;
  align-items: flex-start;
  background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%);
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
}

.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
}
  
@media(min-width: 540px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr);
  }
}

.card{
  list-style: none;
  position: relative;
}
  
.card:before{
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}
  
.card__background{
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition:
    filter 200ms linear,
    transform 200ms linear;
}

  

.card:hover .card__background{
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background{
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
} 

.card__content{
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__category{
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
}

.card__heading{
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}

```


---

## Sitemap

Este tipo de archivo se utiliza para proporcionar información a los motores de búsqueda web sobre las páginas disponibles en un sitio web, facilitando su indexación y mejorando la visibilidad en los resultados de búsqueda. El archivo contiene un conjunto de URL con detalles asociados a cada una, como la frecuencia de cambio (changefreq) y la prioridad (priority), que indican la frecuencia con la que se actualizan las páginas y su importancia relativa, respectivamente. En este caso, se incluyen diversas URL relacionadas con juegos en Canvas, así como otras secciones del sitio web, permitiendo a los motores de búsqueda entender la estructura y contenido del mismo.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>../../index.html</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>../../Canvas/pong/index.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/monigote/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/Bicho/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/faro/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/esferas/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/tanque/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/cuadrados/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/semaforo/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../../Canvas/Moliniño/main.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../CSS/ej2/ej2.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../CSS/ej8/fondos.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../Video/video.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>../Pages/aboutUs.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## Estructura general

Aquí terminaremos con algunos detalles comprendidos fuera de todos los apartados anteriores, así que aquí explicare lo siguiente:

### Script uso templates

En toda la página se usan las plantillas footer y header guardadas dentro de /Templates, y se cargan mediante el uso de este script:

```js
function loadAssetsElement(htmlAsset, targetElement) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', htmlAsset, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(targetElement).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

loadAssetsElement('Templates/footer.html','footerLocker')
loadAssetsElement('Templates/header.html','navBarra')
```

Que busca los assets y los carga dentro de los "div"='navBarra' y los que necesite.