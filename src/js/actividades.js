//Ejercicio 1
let num1=5;
let num2=2;
const suma=num1+num2;
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
console.info("Utilizando (+): " + simpleString1+" "+simpleString2)

//Ejercicio 9
console.info(`${simpleString1} ${simpleString2}`)

//Ejercicio 10
let stringWithSpaces1 = "     TrimStart";
let stringWithSpaces2 = "TrimEnd     ";
console.info(stringWithSpaces1.trimStart())
console.info(stringWithSpaces2.trimEnd())

//Ejercicio 11
console.info(simpleString1.replace("o","i"))

//Ejercico 12
console.info(simpleString2.slice(3))

//Ejercicio 13
console.info(simpleString2.substring(2,4))

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
console.info(typeof(variable));

//Ejercicio 19
let array=[1,2,3,4,5,6];
console.info(array.length)

//Ejercicio 20
let object = {
    propiedad1: "Camilo",
    propiedad2: "Barreneche",
    propiedad3: "Escobar"
  };
  console.info(object.propiedad2);