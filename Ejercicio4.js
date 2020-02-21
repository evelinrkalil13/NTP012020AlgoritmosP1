var continuacion = "SI";
var cont = 0;
var p0 = 0;
var m0 = 0;

var encuesta = 0;
var encuestac = 0;
var cont2 = 0

while (continuacion == "SI") {
    cont++;
    encuestac = parseInt(encuesta);
    
    

    var resto = cont % 10;

    if (resto != 0) {

        encuesta = prompt("Ingrese el número");
        
    } else {
        continuacion = prompt("Desea continuar? (SI/NO)");

        cont2 ++;
    }

    if (encuesta <= 0) {
        p0 = p0 + 1;
    } else if (encuesta > 0) {
        m0 = m0 + 1;
    } 


}

console.log("Los numero menores o iguales a cero son: " + (p0+cont2));
console.log("Los numero mayores a cero son: " + (m0-cont2));


console.log("El numero de ... números ingresados es: " + (cont - cont2));

