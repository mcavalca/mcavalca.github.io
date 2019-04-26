var array = Array(10);
var fill = Array(10);
var i, j, troca;
var allow = 0;

// ERRADOOOOOOOOOOOOOOOOOOOOOOOOO


// 000000000000000000000000000000

for (i = 0; i < 10; i++){
  fill[i] = document.getElementById("v" + i); 
  array[i] = i;
}

function misturar(array) {
  array.sort(() => Math.random() - 0.5);
}

function gerarVetor(){
  limparVetor();
  misturar(array);
  for (i = 0; i < 10; i++) {
    fill[i].innerHTML = array[i];
  }
  allow = 1;
}

function limparVetor(){
  for (i = 0; i < 10; i++) {
    fill[i].innerHTML = "-";
    fill[i].className = "list-group-item flex-fill";
  }  
  allow = 0;
}

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