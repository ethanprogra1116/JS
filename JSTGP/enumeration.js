// --------------------------
// ENUMERATION
// --------------------------
// El bucle for in itera sobre las propiedades de un objeto

const persona = {
  name: "Marian",
  age: 20,
};

for (let name in persona) {
  if (typeof persona[name] != "function") {
    document.writeln(name + ":" + persona[name], "<br>");
  }
}
