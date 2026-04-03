function Timer() {
  this.seconds = 0; // aquí `this` es la instancia nueva (por `new`)

  setInterval(() => {
    this.seconds++; // ← esta función se llama como fn(), no como obj.fn()
  }, 1000);
}

const t = new Timer();

let i = 0;
// Aqui el error era por el while infinito. No dejaba que corrieran los timers
while (true) {
  console.log("Repeticion " + i + ":");
  console.log(t.seconds);
  setTimeout(() => {}, 1000);
  i++;
}
