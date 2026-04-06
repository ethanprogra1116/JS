// Los objetos siguen un modelo prototipico en vez de clásico
// Los primitivos son: string, number, boolean, null, undefined, bigint, symbol
// Todo lo demás es un objeto

// En el caso de number, string y boolean hay objetos Number, String y Boolean que son sus analogos objetos que
// les permiten acceder a propiedades y métodos adicionales.

// Object literals. Los keys pueden ser cualquier string incluso "" y
// los values pueden ser cualquier tipo de dato excepto undefined.
const object = {
  name: "Ethan",
  edad: "20",
};

for (const key in object) {
  console.log(key, object[key]);
}

// La cadena prototipica bien usada puede mejorar el consumo de memoria y el
// object initialization

// NESTIG. podemos poner objetos dentro de otros objetos lo que lo hace muy adecuado
// para intercambiar información. De ahi viene JSON
// En las keys las quotes son necesarias si el key no es un nombre valido para una variable en JS
// O si es una palabra reservada.
const user = {
  name: "Ethan",
  edad: "20",
  address: {
    city: "Monterrey",
    country: "Mexico",
  },
};

// Retrieval
console.log(
  "El usuario",
  user.name,
  "vive en",
  user.address.city,
  "de",
  user.address.country,
);

// PROTOTYPES:
// Los prototipos ya existentes son Array, Object, Function por dar ejemplos.
// Los object literals heredan a Object. Todos los objetos, pero los arrays por ejemplo heredan Array
// que a su vez hereda Object.

// Método del libro para crear objetos a partir de un prototipo.
if (typeof Object.create !== "function") {
  Object.create = function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
} else {
  console.log("Object.create ya existe, no se sobrescribirá.");
}

const padre = {
  name: "charles",
  apellido: "leclerc",
  age: 28,
};

var another_stooge = Object.create(padre); // de tal palo tal astilla

console.log("Propiedades heredadas:", another_stooge.name, another_stooge.age);

// Crear nuevo objeto sin usar Object.create.
// -----------------
// FORMA IMPERATIVA
// -----------------
function Hijo(nombre) {
  this.name = nombre;
  this.edad = 0;
}
Hijo.prototype = padre;

const hijo_de_charles = new Hijo("Saul");
console.log(
  "El hijo de Charles Leclerc heredo su apellido y se llama: ",
  hijo_de_charles.apellido,
  " tambien. Pero se llama ",
  hijo_de_charles.name,
);

// ---------------------------------------------
// FORMA DECLARATIVA y la idea de Brendan Eich
// ---------------------------------------------
const animal = {
  raza: "indefinida",
  oler() {
    return "Sniff, sniff";
  },
};

function Animal() {
  this.name = null;
  this.raza = "indefinida";
}

Animal.prototype.propiedad_rara_que_se_hereda =
  "hOLA soy una propiedad heredada de Animal.prototype";
Animal.prototype.oler = function () {
  return "Sniff, sniff";
};

const perro = Object.create(Animal.prototype); // Si ponemos Animal a secas toma el prototipo Function
perro.name = "Firulais"; // Creada nueva, no estaba en el prototipo heredado
console.log("El nombre del perro es:", perro.name);
console.log("El perro huele:", perro.oler());

// Debugging prototipos
console.log("perro:", perro);
console.log("Animal.prototype:", Animal.prototype);
console.log("Animal a secas:", Animal);
console.log(
  "Propiedad heredada de Animal a animal",
  perro.propiedad_rara_que_se_hereda,
);
