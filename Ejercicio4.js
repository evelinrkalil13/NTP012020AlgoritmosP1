var continuacion = "SI";
var cont = 0;
var p60 = 0;
var p30 = 0;
var promedio = 0;
var promediop = 0;
var encuesta = 0;
var encuestap = 0;
var encuestapc = 0;
var encuestac = 0;

while (continuacion == "SI") {
    encuestac = parseInt(encuesta);
    promedio = (promedio + encuestac);

    encuestapc = parseInt(encuestap);
    promediop = (promediop + encuestapc);

    cont++;
    var resto = cont % 5;

    if (resto != 0) {

        encuesta = prompt("Edad persona" + cont);
        encuestap = prompt("Peso persona" + cont);

    } else {
        continuacion = prompt("Desea continuar? (SI/NO)");
    }

    if (encuesta >= 41 && encuesta <= 59) {
        p60 = p60 + 1;
    } else if (encuesta >= 30 && encuesta <= 40) {
        p30 = p30 + 1;
    } else if (encuesta >= 60) {
        p30 = p30 + 1;
    }


}

console.log("El numero de personas que está entre los 40 y los 60 es: " + p60);
console.log("El numero de personas que está entre los 30 y los 40 es: " + p30);
console.log("El numero de personas mayores de 60 es: " + p30);

console.log("El numero de personas encuestadas es: " + (cont - 1));

console.log("el promedio de edad es " + (promedio / (cont - 1)));
console.log("el promedio de peso es " + (promediop / (cont - 1)));