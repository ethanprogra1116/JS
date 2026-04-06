// Como se accede a las propiedades de un objeto
// Por dot notation y bracket notation

// Codigo necesario para extender el tipo Array
declare global {
  interface Array<T> {
    primer_valor(): T | undefined;
    ultimo_valor(): T | undefined;
  }
}

interface Person {
  name: string;
  age: number;
}

const object_literal: Person = {
  name: "John",
  age: 30,
};

let age: keyof Person = "name";

// Dot notation
console.log(object_literal.name); // "John"

// Bracket notation
console.log(object_literal[age]); // "John"

// Tipos especiales de objetos

// Arrays
const array_literal = [1, 2, 3];
const array_str = ["a", "b", "c"];
console.log(array_literal[0]);
console.log(array_literal[1]);
console.log(array_literal[2]);

typeof array_literal; // "object"
typeof array_str; // "object"

// Aqui typescript no permite agregar métodos a los arrays. Dice que prototype no existe en type number[]
Array.prototype.primer_valor = function () {
  return this[0];
};

console.log(
  "Primera letra de array_literal.primer_valor():",
  array_literal.primer_valor(),
); // 1
console.log(
  "Primera letra de array_str.primer_valor():",
  array_str.primer_valor(),
); // "a"

// Inspeccionamos la interface de Array
console.log(Array.prototype);
