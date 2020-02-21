var numero = 0;
var numeroc = 0;
var suma = 0;


for (i = 0; i < 10; i++) {
    
    numero = prompt("Ingrese el número ");

    numeroc = parseInt(numero);
    suma = (suma + numeroc);
     
  };

  console.log("La suma es: " + suma );