console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
let num1 = 5;
let num2 = 2;
const suma = num1 + num2;
console.info(suma)
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
let simpleString1 = "Hola";
let simpleString2 = "mundo";
console.info(simpleString1.length)
console.info(simpleString2.length)
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
let stringUsingString1 = String("JavaScript");
let stringUsingString2 = String("Ejercicios");
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
let stringUsingNewString1 = new String("Concatenar");
let stringUsingNewString2 = new String("Strings");
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
let substringPosition1 = simpleString1.indexOf("la");
console.info("La posición del substring 'la' es:", substringPosition1);
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
let substringPosition2 = simpleString2.indexOf("ndo");
console.info("La posición del substring 'ndo' es:", substringPosition2);
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
console.info("Concatenación:", simpleString1.concat(" ").concat(simpleString2))
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
console.info("Utilizando (+): " + simpleString1 + " " + simpleString2)
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
console.info(`${simpleString1} ${simpleString2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
let stringWithSpaces1 = "     TrimStart";
let stringWithSpaces2 = "TrimEnd     ";
console.info(stringWithSpaces1.trimStart())
console.info(stringWithSpaces2.trimEnd())
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
console.info(simpleString1.replace("o", "i"))
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
console.info(simpleString2.slice(3))
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
console.info(simpleString2.substring(2, 4))
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
console.info(simpleString1.repeat(2))
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
let sentence = "Esto es una oración de ejemplo";
console.info(sentence.split(" "));
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
console.info(simpleString2.toUpperCase())
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
console.info(simpleString1.toLowerCase())
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
let variable = true;
console.info(typeof (variable));
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
let array = [1, 2, 3, 4, 5, 6];
console.info(array.length)
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
let object = {
  propiedad1: "Camilo",
  propiedad2: "Barreneche",
  propiedad3: "Escobar"
};
console.info(object.propiedad2);
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
let nulo = null;
console.info(typeof (nulo));
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
let indefinido
console.info(typeof (indefinido));
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
let decimal = 12.5;
console.info(typeof (decimal));
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
let negativo = -32;
console.info(typeof (negativo));
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
let palabra = "Casa";
console.info(indexOf("a"))
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
let palabra2 = "Javascript";
console.info(palabra2.includes("Script"));
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
let palabraUnoConcat = "Hola";
let palabraDosConcat = "Mundo";
console.info(palabraUnoConcat.concat(" ").concat(palabraDosConcat))
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
let palabraUnoSuma = "Hola";
let palabraDosSuma = "Mundo";
console.info(palabraUnoSuma + " " + palabraDosSuma)
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
let palabraUnoTemplate = "Hola";
let palabraDosTemplate = "Mundo";
console.info(`${palabraUnoTemplate} ${palabraDosTemplate}`);
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
let cadenaConEspacios = " Ejemplo con espacios ";
cadenaConEspacios = cadenaConEspacios.trimStart().trimEnd();
console.info(cadenaConEspacios);
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
let oracion = "El cielo es azul";
let nuevaOracion = oracion.replace("azul", "rojo");
console.info(nuevaOracion);
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
let otraOracion = "Programación";
let ultimosCuatro = otraOracion.slice(-4);
console.info(ultimosCuatro);
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
let nuevaPalabra = "JavaScript";
let subcadena = nuevaPalabra.substring(2);
console.info(subcadena);
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
let unaPalabraMas= "Hola"
console.info(unaPalabraMas.repeat(3))
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
let otraOracionMas = "Esto es una oración de ejemplo"
let arrayPalabras = otraOracionMas.split(" ")
console.info(arrayPalabras);
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
let cadenaEjercicio36 = "Javascript"
let mayusculas36 = cadenaEjercicio36.toUpperCase()
console.log(mayusculas36)
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
let cadenaEjercicio37 = "EJEMPLO"
let minusculas37 = cadenaEjercicio36.toLowerCase()
console.log(minusculas37)
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
let numeroEjercicio38 = 27
console.log(typeof(numeroEjercicio38))
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
let variableEjercicio39 = true
console.log(typeof(variableEjercicio39))
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
let arregloEjercicio40 = [1, 2, 3, 4, 5]
console.log(arregloEjercicio40.length)
console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41
let objetoEjercicio41 = {
  propiedad1: "Hola",
  propiedad2: "Mundo",
  propiedad3: "Como estan?"
}
console.log(objetoEjercicio41.propiedad2); 
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42
let nuloEjercicio42 = null
console.log(typeof(nuloEjercicio42)) 
console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43
let indefinidoEjercicio43 = undefined
console.log(typeof(indefinidoEjercicio43))
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// Ejercicio 44
let decimalEjercicio44 = 3.1416;
console.log(typeof(decimalEjercicio44));
console.groupEnd();