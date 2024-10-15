console.log("hola");

function suma(a, b) {
  return a + b;
}
console.log(suma(5, 7));

function prueba() {
  return "Buenos días!!!";
}
console.log(prueba());

//crear funcion saludar que reciba como argumento nombre y devuelva Hola y el nombre que recibe

function saludar(nombre = "Pepito") {
  return "Hola " + nombre;
  // return `Hola ${nombre}`
}
console.log(saludar("Xavi"));

function greet(greeting = "Hello", name) {
  if (!name) {
    return greeting;
  } else {
    return greeting + " " + name;
    // return `${greeting} ${name}`;
  }
}
// Hola Breyner
console.log(greet("Hola", "Breyner"));

// Hello
console.log(greet());

// Hello Joan
console.log(greet(undefined, "Joan"));

// Crea una función tuNombre y que devuelva "Sofía"

function tuNombre() {
  const nombre = prompt("Introduce tu nombre");

  return nombre;
}
// console.log(tuNombre());

//Crea una función numero que mediante un prompt reciba un numero y lo devuelva

function numero() {
  const num = prompt("Introduce un número");
  console.log(typeof +num);

  return num;
}
// console.log(numero());

function sumar() {
  const numero1 = prompt("Introduce un numero");
  const numero2 = prompt("Introduce otro numero");
  // convertimos a numero
  numero1 = +numero1;
  numero2 = +numero2;
  return numero1 + numero2;
}
// console.log(sumar());

//**Ejemplo calculadora */
function calculadora() {
  let num1 = prompt("Introduce el 1º número.");
  let signo = prompt(
    "Introduce un signo aritmético entres los siguientes:\n'+' --> Suma\n'-' --> Resta\n'*'--> Multiplicación\n'/' --> División\n'^' --> Potencia\n'%' --> Módulo"
  );

  let num2 = prompt("Introduce el 2º número.");

  num1 = +num1;
  num2 = +num2;

  let resultado = 0;

  switch (signo) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "^":
      resultado = num1 ** num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;

    default:
      break;
  }
  return "El resultado de la operación es: " + resultado;
}

// console.log(calculadora());

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(num) {
  if (typeof num !== "number") {
    return "Debo ser ejecutada con un número";
  } else {
    return num.toString();
  }
}
console.log(convierteString(7));
console.log(convierteString("asasaa"));

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar.

// function esPar(num) {
//     // aquí tu código
//     if(num%2==0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(esPar(4))

function esPar() {
    // aquí tu código
    let num = prompt("introduce el numero")
    num = +num
    if(num%2==0){
        return true
    }else{
        return false
    }
}

console.log(esPar())
 