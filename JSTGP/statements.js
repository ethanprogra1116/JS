// Los statements en JS son los siguientes
// Expressions terminados con ;
// Disruptive
// try
// if
// bucles que pueden ser nombrados
// switch
// while
// for
// do

// Bucles nombrados
// Este concepto de bucles nombrados tambien esta presente en Rust
// y es para romper un bucle padre si estamos muy anidados
// En Rust solo se usa en el bucle loop()
bucle1: for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break bucle1;
  }
}
