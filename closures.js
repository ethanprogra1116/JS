// Segun recuerdo es una funcion que devueve otra funcion que se va
// a volver el valor de la variable

function contandor() {
  let i = 0;
  return function () {
    return i++;
  };
}

const c = contandor();
console.log(c()); // 0
console.log(c()); // 1
console.log(c()); // 2

// Esto es consecuencia directa de los scopes de JS. c recuerda el valor de i porque
// la funcion interna tiene acceso al scope de la funcion externa. y mientras c no muera
// el valor de i se va a incrementar cada vez que se llame a c.
