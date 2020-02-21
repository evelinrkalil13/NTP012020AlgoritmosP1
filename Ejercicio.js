var continuacion = "SI";
var cont = 0;
var promedio = 0;
var encuesta = 0;
var encuestac = 0;

while (continuacion == "SI") {
    
    if (encuesta<=18) {
        
        encuesta = prompt("Edad persona " + cont);
        cont++;  

        encuestac = parseInt(encuesta);
        promedio = (promedio + encuestac);
        
    } else if(encuesta > 18) {
        console.log("el promedio de edad es " + (promedio - encuestac ) / (cont-1));

        continuacion = prompt("Desea continuar? (SI/NO)");
    }

}

console.log("El numero de personas encuestadas es: " + (cont-1)  );

