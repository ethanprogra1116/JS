'use strict';
// Las funciones se crean con un function literal
// Constan de un nombre opcional, si no son anonimas
// la palabra reservada function
// parametros opcionales
// Cuerpo de la funcion
let add = function (a, b) {
  return a + b;
};
let result = add(3, 5);
console.log('El resultado de la suma fue', result);

// Las funciones tienen un link a la funcion donde fueron creadas. Por eso existen los closures

function contador() {
  let i = 0;
  return function () {
    i++;
    return i;
  };
}
let counter = contador();
console.log(counter()); // 1
console.log(counter()); // 2

// This cambia segun las 4 formas en las que podemos importar una funcion
// DEFINICION DEL LIBRO:
// The invocation operator is a pair of parentheses that follow any expression that produces
// a function value. The parentheses can contain zero or more expressions, separated by commas.
// Ejemplo
let greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet('John')); // Hello, John!

// -------------------------------------
// LAS 4 FORMAS DE INVOCAR UNA FUNCION
// -------------------------------------

// 1. Method invocation pattern
// La funcion es un método de un objeto
var myObj = {
  value: 0,
  increment: function () {
    this.value++; // Sin this no funciona
    return this.value;
  },
};
console.log('Contador de myObj incrementando');
console.log(myObj.increment()); // 1
console.log(myObj.increment()); // 2
console.log(myObj.increment()); // 3

// 2. The Function Invocation Pattern
// Cuando no es una propiedad de un objeto es una funcion normal
// Ejemplo:
let nueva_suma = add(2, 3); //globalThis normalmente y undefined en use strict
// Limitacion es que no podemos usar una funcion helper interna de un método porque su this es diferente
myObj.double = function () {
  let that = this; // Workaround de el problema de this con variables sueltas.
  let helper = function () {
    that.value = add(that.value, that.value);
  };
  helper();
};

console.log(`myObj es ${myObj.value} y cuando la incrementamos al doble es: `);
myObj.double();
console.log(myObj.value);

// 3. Constructor Invocation Pattern
// Con la palabra new se crea un link al prototipo Quo
const Quo = function (string) {
  this.status = string;
};

Quo.prototype.get_status = function () {
  return this.status;
};

const myQuo = new Quo('supreme');
// this apunta al objeto creado con new Quo
myQuo.get_status(); //supreme

// 4. Apply Invocation Pattern
// Esto viene de la naturaleza de que function es un objeto. Las funciones pueden tener métodos
// apply: metodo que toma dos argumentos, this y un array de parametros. Me recuerda a argv.
let array = [3, 4];
let sum = add.apply(null, array);

// Objeto con propiedad status
const statusObject = {
  status: 'A-Ok',
};

// Podemos usar apply para llamar a un metodo de un objeto con un this específico
let status_ = Quo.prototype.get_status.apply(statusObject);
// Basicamente usa los metodos del prototipo pero define que this es statusObject
// entonces this.status es 'A-Ok'
console.log(status_); // A-Ok

// Arguments. Super similar a argv de C.
// Permite pasar un array de parametros a una funcion
// arguments es objeto con propiedad length que contiene el numero de argumentos pasados. Argc
// y los argumentos en sí como propiedades indexadas desde 0. Argv
// Funcion que suma muchos numeros indefinidos
let sigma = function () {
  let i,
    sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

// Sigma con rest... ya que arguments es array-like por lo que no tiene los métodos
// naturales de los arrays como map fiter, reduce, for each
let sigma_2 = function (...args) {
  return args.reduce((sum, arg) => sum + arg, 0);
};

console.log('Suma larga: ' + sigma_2(1, 2, 3, 4, 5));

// Prueba de velocidad sigma y sigma_2
const largeArray = Array.from({ length: 100000 }, () => Math.random());
console.log(largeArray);
console.time('sigma');
sigma(...largeArray);
console.timeEnd('sigma'); // 8.072ms
console.time('sigma_2');
sigma_2(...largeArray);
console.timeEnd('sigma_2'); // 2.126ms
// Como args es un array real se optimizó.
