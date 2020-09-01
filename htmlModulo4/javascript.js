
class Prenda{
    constructor(nombre,cantidad,precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;        
    }
    
    getNombre(){  return this.nombre;}

    getCantidad(){ return this.cantidad;   }

    getPrecio(){    return this.precio; }

}

class Carrito{
    constructor(array){  this.prendas=array;   }

    getPrendas(){      return this.prendas;   }
}
let prendas;
let carrito=[];
let cantidad=0;
let total=0;


function agregarElementos(){ 
    let prenda1= new Prenda("Vestido Azul",0,22);
    let prenda2= new Prenda("Vestido Blanco",0,25);
    prendas=[prenda1,prenda2];

prendas.forEach(function(data,index){
    document.getElementById('nombre'+(index+1)).innerHTML = prendas[index].nombre;
    document.getElementById('nom'+(index+1)).innerHTML = prendas[index].nombre;
    document.getElementById('precio'+(index+1)).innerHTML = prendas[index].precio;
})

   document.getElementById('cantidad').innerHTML = cantidad;
   document.getElementById('total').innerHTML = total;
}


window.addEventListener("load", function() {
    agregarElementos();
}, false); 



function insertarDato(valor){
    carrito.push(prendas[valor-1]);
    cantidad=carrito.length;
    total += prendas[valor-1].precio;
    
    document.getElementById('cantidad').innerHTML = cantidad;
    document.getElementById('total').innerHTML = total;
    document.getElementById('anadir'+valor).disabled = true;
   

}

function eliminarDato(valor){
    let i=0;
    let encontro=false;
   
    while(i<carrito.length && !encontro){

            if(carrito[i].nombre == prendas[valor-1].nombre){
                 encontro=true;
                 total -= carrito[i].precio;
                 carrito.splice(i,1); 
            }
        i++;
    }

    
 
    cantidad=carrito.length;
    document.getElementById('cantidad').innerHTML = cantidad;
    document.getElementById('total').innerHTML = total;

}



