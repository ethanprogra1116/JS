## The event loop in js. by philip roberts
[link_del_video](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)

### el motor de js. v8 y node
el motor tiene un call stack donde ahi estan todas las funciones que debe de correr el codigo. y se va llenando con concurrencia
por ejemplo.

| v8 | node |
|---|---|
| tiene apis web que le da el navegador | tiene apis de c++ que le permiten interactuar con el sistema operativo |
| dom (`document`), `fetch`, `localstorage`, `xmlhttprequest`, bom (`window`) | `fs`, `net`, `http`, `process` (`process.argv`, etc.) |

el llamar a las apis del browser o de node. cuando estas se cumplan como el settimeout se cumpla esa funcion se pushea
al **calback queue**. y **el event loop** lo que hara es que cuando el **call stack** este vacío va a subir las funciones del
**callback queue** en orden fifo. contratio al call stack que es lifo.

definiciones:
- **call stack**: lifo que ejecuta lo que js necesita. parte de v8
- **task queue/callback queue**: callbacks que las apis de node o del browser devolvieron.
- **event loop**: checa si el call stack esta vacío, si es asi lanza la siguiente task de la queue
- **microtask queue**: lo mismo que la task queue pero se activa para promises:
  - patrones then catch finally
  - async await functions
  - queuemicrotask callback
  - new mutationobserver callback

![js runtime](./js_runtime.png)

> *Dato*: Las tasks queue no se realizan sino hasta que se termina el queue de las microtasks
