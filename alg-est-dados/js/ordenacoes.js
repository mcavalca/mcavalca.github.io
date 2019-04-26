var array = Array(10);
var fill = Array(10);

var array2 = Array(10);
var fill2 = Array(10);


var i, j, troca;
var allow = 0, allow2 = 0;
var houveTroca;

var iMenor;

// ERRADOOOOOOOOOOOOOOOOOOOOOOOOO


// 000000000000000000000000000000

// Preenchimento dos elementos

for (i = 0; i < 10; i++){
  fill[i] = document.getElementById("v" + i); 
  array[i] = i;
  fill2[i] = document.getElementById("y" + i); 
  array2[i] = i;
}

// 

function misturar(array) {
  array.sort(() => Math.random() - 0.5);
}

// Limpar o conteudo dos vetores na página

function limparVetor(){
  for (i = 0; i < 10; i++) {
    fill[i].innerHTML = "-";
    fill[i].className = "list-group-item flex-fill";
  }  
  allow = 0;
}

function limparVetor2(){
  for (i = 0; i < 10; i++) {
    fill2[i].innerHTML = "-";
    fill2[i].className = "list-group-item flex-fill";
  }  
  allow2 = 0;
}

// 
// Coloca o vetor na página

function gerarVetor(){
  limparVetor();
  misturar(array);
  for (i = 0; i < 10; i++) {
    fill[i].innerHTML = array[i];
  }
  allow = 1;
}

function gerarVetor2(){
  limparVetor2();
  misturar(array2);
  for (i = 0; i < 10; i++) {
    fill2[i].innerHTML = array2[i];
  }
  allow2 = 1;
}

//
// --           METODOS DE ORDENAÇÃO          --
// Algoritmos Bubble Sort

function bubbleSort(){
  if (allow){
    for (i = 0; i < 10; i++) {
      this.fill[i].className += " bg-success";
      for (j = 0; j < 9; j++){
        fill[i].className += " bg-secondary";
        if (array[j] > array[j + 1]){
          troca = array[j]; 
          array[j] = array[j + 1];
          array[j + 1] = troca;

          troca = fill[j].innerHTML;
          fill[j].innerHTML = fill[j + 1].innerHTML;
          fill[j + 1].innerHTML = troca;
        }
      }    
    }
  }
}

function bubbleSortSmart(){
  if (allow2){
    for (i = 0; i < 10; i++) {
      houveTroca = 0;
      this.fill2[i].className += " bg-success";
      for (j = 0; j < (10 - i); j++){
        fill2[i].className += " bg-secondary";
        if (array2[j] > array2[j + 1]){
          troca = array2[j]; 
          array2[j] = array2[j + 1];
          array2[j + 1] = troca;

          troca = fill2[j].innerHTML;
          fill2[j].innerHTML = fill2[j + 1].innerHTML;
          fill2[j + 1].innerHTML = troca;
          
          houveTroca = 1;
        }
      }   
      if (!houveTroca) break;
    }
  }
}

//
// Algoritmo Selection Sort

function selectionSort(){
  if (allow){
    for (i = 0; i < 9; i++){
      iMenor = i;
      for (j = (i + 1); j < 10; j++) {
        if (array[j]  < array[iMenor]) { iMenor = j; }
      }
      fill[iMenor].className += " bg-secondary";
                              
      troca = array[iMenor];
      array[iMenor] = array[i];
      array[i] = troca;            
      
      this.fill[i].className += " bg-success";

      troca = fill[iMenor].innerHTML;
      fill[iMenor].innerHTML = fill[i].innerHTML;
      fill[i].innerHTML = troca;
    }
    this.fill[9].className += " bg-success";
  }
}