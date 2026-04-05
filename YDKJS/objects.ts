// Como se accede a las propiedades de un objeto
// Por dot notation y bracket notation

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
