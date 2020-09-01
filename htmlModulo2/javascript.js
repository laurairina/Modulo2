var arrayJson=[];

function insertarDato(){
 
    var desde= document.getElementById("desde").value;
    var personas= document.getElementById("personas").value;
    var fecha= document.getElementById("fecha").value;
    var hacia=document.getElementById("hacia").value;
     
    var json = {
        "desde":desde ,
        "personas": personas,
        "fecha": fecha,
        "hacia": hacia
      };

      if(desde!="" && personas!="" && fecha!="" && hacia!=""){
        arrayJson.push(json);
        alert("Añadido");
        console.log(arrayJson);
        
      }
      else{
        alert("Rellenar datos");
      }
 
   
}

function mostrarR(){
    let arrayR=[]
    console.log("Contiene la R");
    for (let index = 0; index < arrayJson.length; index++) {
        if(arrayJson[index].desde.indexOf("r")!= -1){
            arrayR.push(arrayJson[index]);
        }
               
    }
    console.log(arrayR); 
}