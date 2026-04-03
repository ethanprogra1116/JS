// Four setTimeouts
setTimeout(() => {
  console.log("setTimeout 1");
}, 1000);

setTimeout(() => {
  console.log("setTimeout 2");
}, 1000);

setTimeout(() => {
  console.log("setTimeout 3");
}, 1000);

setTimeout(() => {
  console.log("setTimeout 4");
}, 1000);

// Aqui lo que pasa es que las 4 corren en el stack de V8 y llaman una Web API que despues los agrega al event loop y el event
// loop los ejecuta en el stack de V8 cuando el stack esta vacio.
