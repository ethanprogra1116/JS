// Como se accede a las propiedades de un objeto
// Por dot notation y bracket notation

const object_literal = {
  name: "John",
  age: 30,
};

let age = "name";

// Dot notation
console.log(object_literal.name); // "John"

// Bracket notation
console.log(object_literal[age]); // "John"

// Tipos especiales de objetos

// Arrays
const array_literal = [1, 2, 3];
console.log(array_literal[0]);
console.log(array_literal[1]);
console.log(array_literal[2]);

typeof array_literal; // "object"
// Como es object puede tener propiedades
array_literal.creador = "Ethan"; //JS legal pero no recomendado. JS deja de asumir cosas y no puede optimizar
console.log("creador: ", array_literal.creador);

// Se le puede agregar métodos a los arrays. No es muy bueno, pero se puede
Array.prototype.primer_valor = function () {
  return "string desde la cadena prototipica. Afectando al objeto array";
};

console.log(array_literal.primer_valor()); // "string desde la cadena prototipica"

// Prototipo de Array. Funciones y métodos
console.log(Array.prototype); // Propiedad enumerable
console.log(Object.getOwnPropertyNames(Array.prototype)); // Propiedades nativas no enumerables

// Funciones. Las funciones son un tipo muy especial de objeto en JS.
function foo() {
  return "Hola mundo";
}

foo.bar = "Esto es una propiedad de una funcion";
console.log(typeof foo.bar); // "string"
typeof foo; // "function" no objeto, pero en realidad es un objeto.
