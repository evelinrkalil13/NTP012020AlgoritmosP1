var continuacion = "SI";
var cont = 0;
var promedio = 0;
var encuesta = 0;
var encuestac = 0;


while (continuacion == "SI" ) {
    

    
    encuesta = prompt("Estatura persona " + cont);
    cont++;  

    encuestac = parseInt(encuesta);
    promedio = (promedio + encuestac);

    console.log("el promedio de estatura es " + (promedio - encuestac ) / (cont-1));
    
    if(isNaN(encuestac) || encuesta == "undefined" || encuesta == undefined || encuesta == " "  || encuesta == "" ){
        console.log("error");
      break;

    }
        
    

}

console.log("El numero de personas encuestadas es: " + (cont-1)  );
