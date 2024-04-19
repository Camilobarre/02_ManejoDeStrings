//Ejercicio 1
let num1 = 5;
let num2 = 2;
const suma = num1 + num2;
console.info(suma)

//Ejercicio 2
let simpleString1 = "Hola";
let simpleString2 = "mundo";
console.info(simpleString1.length)
console.info(simpleString2.length)

//Ejercicio 3
let stringUsingString1 = String("JavaScript");
let stringUsingString2 = String("Ejercicios");

//Ejercicio 4
let stringUsingNewString1 = new String("Concatenar");
let stringUsingNewString2 = new String("Strings");

//Ejercicio 5
let substringPosition1 = simpleString1.indexOf("la");
console.log("La posición del substring 'la' es:", substringPosition1);

//Ejercicio 6
let substringPosition2 = simpleString2.indexOf("ndo");
console.log("La posición del substring 'ndo' es:", substringPosition2);

//Ejercicio 7
console.info("Concatenación:", simpleString1.concat(" ").concat(simpleString2))

//Ejercicio 8
console.info("Utilizando (+): " + simpleString1 + " " + simpleString2)

//Ejercicio 9
console.info(`${simpleString1} ${simpleString2}`)

//Ejercicio 10
let stringWithSpaces1 = "     TrimStart";
let stringWithSpaces2 = "TrimEnd     ";
console.info(stringWithSpaces1.trimStart())
console.info(stringWithSpaces2.trimEnd())

//Ejercicio 11
console.info(simpleString1.replace("o", "i"))

//Ejercico 12
console.info(simpleString2.slice(3))

//Ejercicio 13
console.info(simpleString2.substring(2, 4))

//Ejercicio 14
console.info(simpleString1.repeat(2))

//Ejercicio 15
let sentence = "Esto es una oración de ejemplo";
console.info(sentence.split(" "));

//Ejercicio 16
console.info(simpleString2.toUpperCase())

//Ejercicio 17
console.info(simpleString1.toLowerCase())

//Ejercicio 18
let variable = true;
console.info(typeof (variable));

//Ejercicio 19
let array = [1, 2, 3, 4, 5, 6];
console.info(array.length)

//Ejercicio 20
let object = {
  propiedad1: "Camilo",
  propiedad2: "Barreneche",
  propiedad3: "Escobar"
};
console.info(object.propiedad2);

//Ejercicio 21
let nulo = null;
console.info(typeof (nulo));

//Ejercicio 22
let indefinido
console.info(typeof (indefinido));

//Ejercicio 23
let decimal = 12.5;
console.info(typeof (decimal));

//Ejercicio 24
let negativo = -32;
console.info(typeof (negativo));

//Ejercicio 25
let palabra = "Casa";
console.info(indexOf("a"))

//Ejercicio 26
let palabra2 = "Javascript";
console.info(palabra2.includes("Script"));

//Ejercicio 27
let palabraUnoConcat = "Hola";
let palabraDosConcat = "Mundo";
console.info(palabraUnoConcat.concat(" ").concat(palabraDosConcat))

//Ejercicio 28
let palabraUnoSuma = "Hola";
let palabraDosSuma = "Mundo";
console.info(palabraUnoSuma + " " + palabraDosSuma)

//Ejercicio 29
let palabraUnoTemplate = "Hola";
let palabraDosTemplate = "Mundo";
console.info(`${palabraUnoTemplate} ${palabraDosTemplate}`);

//Ejercicio 30
let cadenaConEspacios = " Ejemplo con espacios ";
cadenaConEspacios = cadenaConEspacios.trimStart().trimEnd();
console.info(cadenaConEspacios);

//Ejercicio 31
let oracion = "El cielo es azul";
let nuevaOracion = oracion.replace("azul", "rojo");
console.info(nuevaOracion);

//Ejercicio 32
let otraOracion = "Programación";
let ultimosCuatro = otraOracion.slice(-4);
console.info(ultimosCuatro);

//Ejercicio 33
let nuevaPalabra = "JavaScript";
let subcadena = nuevaPalabra.substring(2);
console.info(subcadena);

//Ejercicio 34
let unaPalabraMas= "Hola"
console.info(unaPalabraMas.repeat(3))

//Ejercicio 35
let otraOracionMas = "Esto es una oración de ejemplo";
let arrayPalabras = otraOracionMas.split(" ");
console.info(arrayPalabras);
