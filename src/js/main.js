//Declaracion de Strings
// const option1= "Hola Mundo"
// const option2= String("Hola Mundo")
// const option3= new String("Hola Mundo")

// console.info(option1)
// console.info(option2)
// console.info(option3)

//Extraccion de datos
// const message="Este es un mensaje para pruebas"
// document.write(message)

//Extrar la cantidad de caracteres
// console.info(message.length)

//Extraer un caracter
// console.info(message[1])
// console.info(message.charAt(1))
// console.info(message.search("lucas")) //Si no encuentra la palabra clave, search retorna un -1
// console.info(message.includes("mensaje de prueba")) // Si no lo encuentra, retorna un false
// console.info(message.startsWith("Este")) //Sensible a mayusculas
// console.info(message.endsWith("pruebas.")) //No lo encuentra por el punto al final

//Interpolacion con cadenas, concatenacion
// const messageOne="Este es un mensaje para"
// const messageTwo="practicar concatenación"
// const fullName="Camilo Barreneche Escobar"

// console.info(messageOne)
// console.info(messageTwo)

// console.info("option 1 (+): " + messageOne+" "+messageTwo)
// console.info("option 2 (,):",messageOne,messageTwo)
// console.info(`option 3 (\`): ${messageOne} ${messageTwo}`)
// console.info("option 4 concat() simple:", messageOne.concat(" ").concat(messageTwo))
// console.info("option 5 concat() abreviada:", messageOne.concat(" ",messageTwo))

// const header=`
// <header>
//     <h1>Hola mundo, mi nombre es ${fullName}</h1>
// </header>
// `
// document.write(header)

//Depuracion de strings
// const message="HolA coMO eSTas"
// document.write(message)

// console.info(message.toLowerCase());
// console.info(message.toUpperCase());

//Limpieza de espacios
// const message="       barrecami@gmail.com      "

// console.info(message)
// console.info(message.trimStart())
// console.info(message.trimEnd())
// console.info(message.trim())

//Fragmentacion de un string
// const message = "anita lava la tina porque se porto mal"
// document.write(message)

// console.info(message.substring(9))
// console.info(message.substring(0,10))

// console.info(message.slice(9))
// console.info(message.slice(0,10)) 

// console.info(message.replace("a","e")) //Replace remplaza solo la primera coincidencia
// console.info(message.replaceAll("a","e"))
// console.info(message.replaceAll(/[aeiou]/g,"z"))

//Relleno de string
// const message = "Riwi"
// document.write(message)

// console.info(message.repeat(100)) //Funcion para repetir
// console.info(message.padStart(10,"*")) //Funcion para rellenar al principio
// console.info(message.padEnd(10,"#")) //Funcion para rellenar al final

//Destruccion total

// const message = "En riwi todos somos una familia"
// document.write(message)

// //console.table(message.split("")) //Se separa letra por letra
// console.table(message.split(" ")) //Se separa espacio por espacio
// console.table(message.split(" ",2)) //Separa las dos primeras palabras