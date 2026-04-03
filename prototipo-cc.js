function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
  }, 1000);
}

// En este caso no se necesita, pero podriamos agregar métodos a la cadena prototipica
// para detener el timer, resetearlo, etc.
const t = new Timer();
let i = 0;

// SetInterval para imprimir el tiempo cada segundo de forma no bloqueante.
// Funcionamiento del event loop.
setInterval(() => {
  console.log("Repeticion " + i + ":");
  console.log(t.seconds);
  i++;
}, 1000);
