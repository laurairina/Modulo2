
function a(){  console.log("Hola desde a");  }

function b(){  console.log("Hola desde b");  }

function main(func){   console.log("Hola desde main ");   func();   }

a();
b();
main(a);
main(b);
//main(main);   //da un error TypeError: func is not a function


console.log("------------------------------------");

function cuadrado(num){  return Math.pow(2,num);  }

function aleatorio(num){ return Math.round(Math.random()*(num));  }

function compose(cuad,ale){
  resultado =(x)=>{
    return cuad(ale(x));
  };
  return resultado;
}

console.log(compose(cuadrado, aleatorio)(4))  //mismo resultado primera forma

let funcionRetorno = compose(cuadrado, aleatorio);
console.log(funcionRetorno(4))  //mismo resultado segunda forma
