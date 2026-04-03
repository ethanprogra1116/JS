// Es un workaround para crear keys de objetos unicas

const ID = Symbol("id");

const user = {
  name: "Ethan",
  [ID]: 1,
};

console.log(user[ID]);
console.log(user["id"]); // undefined

console.log(Object.keys(user)); // No esta incluido el symbol ID en las keys
console.log(Object.getOwnPropertySymbols(user)); // Si esta incluido el symbol ID en los symbols.
// Sirve para propiedades semi - privadas y no colisionar con otras keys
