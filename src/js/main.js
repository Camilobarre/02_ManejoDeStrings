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

//Interpolacion con cadenas, concatenacion
const messageOne="Este es un mensaje para"
const messageTwo="practicar concatenacion"
const fullName="Camilo Barreneche Escobar"

console.info(messageOne)
console.info(messageTwo)

console.info("option 1 (+): " + messageOne+" "+messageTwo)
console.info("option 2 (,):",messageOne,messageTwo)
console.info(`option 3 (\`): ${messageOne} ${messageTwo}`)

const header=`
<header>
    <h1>Hola mundo, mi nombre es ${fullName}</h1>
</header>
`
document.write(header)