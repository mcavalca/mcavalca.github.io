initialX = 1;

function f1(x) { 
  return x*x*x;
}

function draw() {
 var canvas = document.getElementById("canvas");
 if (null==canvas || !canvas.getContext) return;

 var axes={}, ctx=canvas.getContext("2d");
 axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
 axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
 axes.scale = 40;                 // 40 pixels from x=0 to x=1
 axes.doNegativeX = true;

 showAxes(ctx,axes);
 funGraph(ctx,axes,f1,"rgb(11,153,11)",1); 
}

function funGraph (ctx,axes,func,color,thick) {
 var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
 var iMax = Math.round((ctx.canvas.width-x0)/dx);
 var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
 ctx.beginPath();
 ctx.lineWidth = thick;
 ctx.strokeStyle = color;

 for (var i=iMin;i<=iMax;i++) {
  xx = dx*i; yy = scale*func(xx/scale);
  if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
  else         ctx.lineTo(x0+xx,y0-yy);
 }
 ctx.stroke();
}

function showAxes(ctx,axes) {
 var x0=axes.x0, w=ctx.canvas.width;
 var y0=axes.y0, h=ctx.canvas.height;
 var xmin = axes.doNegativeX ? 0 : x0;
 ctx.beginPath();
 ctx.strokeStyle = "rgb(128,128,128)"; 
 ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
 ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
 ctx.stroke();
}

var div = document.getElementById('Funcao');

function addX() {
  var entrada = document.createElement('input'), 
      xElevado = document.createElement('p');
  entrada.setAttribute("id", "Valor_" + initialX);
  xElevado.setAttribute("id", "Texto_" + initialX);
  entrada.setAttribute("class", "classe-funcoes");
  xElevado.setAttribute("class", "classe-funcoes");
  entrada.setAttribute("size", "10");

  entrada.placeholder = '0';
  xElevado.innerHTML = 'X<sup>' + initialX + '</sup> + ';
  initialX += 1;
  // attach onlick event handler to remove button

  div.appendChild(entrada);
  div.appendChild(xElevado);
}

function removeX() {
  // remove this button and its input
  if (initialX > 1) {
    idValor = "Valor_" + (initialX-1);
    idTexto = "Texto_" + (initialX-1);
    var valor = document.getElementById(idValor);
    var texto = document.getElementById(idTexto);
    valor.parentNode.removeChild(valor);
    texto.parentNode.removeChild(texto);
    initialX -= 1;
  }
}

// attach onclick event handler to add button
document.getElementById('adicionar').addEventListener('click', addX);
// attach onclick event handler to 1st remove button
document.getElementById('remover').addEventListener('click', removeX);