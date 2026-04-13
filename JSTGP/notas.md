### Notas del libro JS the Goodparts que me llamen la atención
- Todos los caracteres de texto son de 16 bits. no de 8. Un sticker representa dos caracteres.
- Todo lo que no sea un ´string, number, null, undefined, boolean, symbol, bigint´ es un objeto. Un objeto prototípico, no un objeto de clase. funciones y arrays son objetos especiales
- Todos los objetos son prototype de el object Object.
- Los bucles pueden ser nombrados y atacados directamente con break
- Los objetos estan vivos en JS. Puedes agregarles métodos y propiedades en runtime. TS mitiga esto en el desarrollo con interfaces. Son paradigmas diferentes.
- Todo lo que no sea un primitivo se pasa por pass by sharing. Objetos, Arrays y Funciones. Que viene siendo similar. Comportamiento similar a Python, Java y Ruby
O sea si se pasa el puntero, pero no podemos reasignar el puntero original. Si podemos mutar el objeto
```js
function reemplaza(o) {
  o = { x: 999 }; // reasignas el parámetro local
}

let obj = { x: 1 };
reemplaza(obj);
console.log(obj.x); // 1 — obj no cambió
```
> Este ejemplo muestra como no se pasa en realidad por referencia en el sentido clásico.

*Caso en el que si se muta*
```js
function muta(o) {
  o.x = 99;
}

let obj = { x: 1 };
muta(obj);
console.log(obj.x); // 99 — SÍ se ve afuera
```

- El prototipo Function tiene la propiedad name que es el nombre de la funcion. Function.prototype.name
- Una propiedad de un objeto se puede borrar con `delete` Solo aplica al objeto aplicado. No a la prototype chain

## Functions
- Las funciones estan linkeadas a Function.prototype que a su vez esta linkeado a Object
- Ademas cada funcion tiene la propiedad prototype. Es un objeto con un constructor cuyo valor es la funcion misma.
- Como objetos pueden ser asignadas a variables, pasadas como parametros o retornadas por otras funciones. Son un objeto de primera clase
- Una funcion tiene acceso a las variables internas y externas en su co
- This cambia segun las 4 formas en las que podemos importar una funcion
- Si una funcion llamada con new retorna un objeto la variable retornada es el objeto retornado explicitamente, no this. Cualquier primitivo retornado se desacarta, se retorna this por defecto.
-
