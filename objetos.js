// Todo lo que no sea un primitivo en JS es un objeto incluyendo los arrays

let arr = [1, 2, 3];

// Object literal
const Persona_1 = {
  nombre: "Ethan",
  ocupacion: "programador",
  edad: 20,
};

// Factory function. Devuelve un objeto plano. La distincion es que son independientes
// e ignorar la prototype chain.
//
// Dato curioso: Vienen del mundo funcional
function crearPersona(nombre, ocupacion, edad) {
  return {
    nombre,
    ocupacion,
    edad,
  };
}
const persona = crearPersona("Ethan", "programador", 20);

// Constructor function. Devuelve un objeto con una prototype chain.
class Persona_Clasica {
  constructor(nombre, ocupacion, edad) {
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.edad = edad;
  }
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

// Esto es una constructor function. Devuelve un objeto con una prototype chain.
function Persona_Func(nombre, ocupacion, edad) {
  this.nombre = nombre;
  this.ocupacion = ocupacion;
  this.edad = edad;
}
Persona_Func.prototype.saludar = function () {
  return `Hola, soy ${this.nombre}`;
};

// Instanciar un objeto a partir de la constructor function
const nuevaPersona = new Persona_Clasica("Ethan", "programador", 20);

const nuevaPersona_Func = new Persona_Func("Ethan", "programador", 20);

// Acceder a arr
console.log(arr[0]);

// Acceder a propiedades del Object
console.log(Persona_Clasica.nombre);

// Se puede poner indices al objeto y se puede poner propuedades al array. Es JS valido
arr.nombre = "Ethan";
Persona_Clasica[0] = 1;

console.log(Persona_Clasica); //{ "0": 1, nombre: "Ethan", ocupacion: "programador", edad: 20 }
console.log(arr); // [ 1, 2, 3, nombre: "Ethan" ]

console.log("Diferentes tipos de objetos en JS");

// El output de estos primeros dos es igual
console.log("Object literal:", Persona_1);
console.log("Factory function:", persona);
console.log("Object de clase:", nuevaPersona); // Persona { nombre: 'Ethan', ocupacion: 'programador', edad: 20 } con el nombre de la clase al inicio
console.log("Método de clase:", nuevaPersona.saludar());
console.log(
  "Método del prototipo de la constructor function:",
  nuevaPersona_Func.saludar(),
);

// tipos
console.log("Tipo de Persona_Clasica:", typeof Persona_Clasica); // esta es la clase
console.log("Tipo de nuevaPersona:", typeof nuevaPersona); // este es el objeto resultante de la clase

// Constructor function
console.log("Tipo de Persona_Func:", typeof Persona_Func); // function
console.log("Tipo de nuevaPersona_Func:", typeof nuevaPersona_Func); // este es el objeto resultante de la constructor function

// Ejemplo de Claude
//
// Esto ES lo que class desugarea (aproximadamente)
function Animal(nombre) {
  this.nombre = nombre;
}
Animal.prototype.hablar = function () {
  return `¡Hola, soy ${this.nombre}!`;
};

function Perro(nombre) {
  Animal.call(this, nombre); // call es un método que llama a la función constructora Animal con el contexto (this) de Perro.
  // Todas las funciones en JS vienen del objeto Function que tiene el método call.
}

// Recordando que Object es del que descienden todos los objetos en JS
Perro.prototype = Object.create(Animal.prototype); // herencia
Perro.prototype.constructor = Perro;

var obj = {
  a: "hello world",
  b: 42,
};

var b = "a";

obj[b]; // "hello world"
obj["b"]; // 42
obj.b; // "hello world"
