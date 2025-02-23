/**
 * @file script.js
 * @description Este script gestiona una lista de amigos, permitiendo agregar nombres,
 * visualizar la lista, sortear un amigo aleatorio y limpiar la lista completamente.
 * Utiliza el DOM para interactuar con elementos HTML en la página.
 */

/**
 * @type {string[]} amigos - Array que almacena los nombres de los amigos agregados.
 * Inicialmente está vacío.
 */
let amigos = [];

/**
 * @function agregarAmigo
 * @description Agrega un nuevo amigo a la lista de amigos.
 *
 * Primero, recupera el valor del campo de entrada de texto 'amigo'.
 * Si el campo está vacío, muestra una alerta pidiendo al usuario que digite un nombre.
 * Si el campo contiene un nombre:
 *  1. Añade el nombre al array 'amigos'.
 *  2. Llama a la función 'limpiarCampoNombre' para resetear el campo de entrada de texto.
 *  3. Llama a la función 'limpiarLista' para limpiar la visualización de la lista en la página.
 *  4. Llama a la función 'actualizarLista' para re-renderizar la lista con el nuevo amigo agregado.
 *
 * @listens click Al hacer clic en el botón "Añadir" con id="amigo" en el HTML
 * @returns {void}
 */
function agregarAmigo() {
  // Recupera el valor del input 'amigo' del documento HTML.
  let amigoDigitado = document.getElementById("amigo").value;

  // Valida si el campo de nombre está vacío.
  if (amigoDigitado == "") {
    // Muestra una alerta al usuario si no ha ingresado un nombre.
    alert("Por favor, digita un nombre!");
  } else {
    // Agrega el nombre digitado al array de amigos.
    amigos.push(amigoDigitado);
    // Limpia el campo de entrada de nombre para permitir agregar otro amigo.
    limpiarCampoNombre();
    // Limpia la visualización de la lista de amigos en el HTML.
    limpiarLista();
    // Actualiza la visualización de la lista de amigos en el HTML con el nuevo amigo.
    actualizarLista();
  }
}

/**
 * @function limpiarLista
 * @description Limpia la visualización de la lista de amigos y el resultado del sorteo en la página web.
 *
 * Esta función se encarga de:
 *  1. Obtener el elemento HTML que muestra la lista de amigos ('listaAmigos').
 *  2. Limpiar el contenido HTML de este elemento, removiendo cada item de amigo visualizado.
 *  3. Obtener el elemento HTML que muestra el resultado del sorteo ('resultado').
 *  4. Limpiar el contenido HTML de este elemento, removiendo cualquier resultado de sorteo previo.
 *
 * Se utiliza para preparar la visualización antes de actualizar la lista o realizar un nuevo sorteo.
 *
 * @returns {void}
 */
function limpiarLista() {
  // Obtiene el elemento HTML donde se visualiza la lista de amigos.
  let lista = document.getElementById("listaAmigos");
  // Limpia el contenido HTML de la lista, removiendo los items visualizados.
  lista.innerHTML = "";
  // Limpia el contenido HTML del elemento que muestra el resultado del sorteo.
  document.getElementById("resultado").innerHTML = "";
}

/**
 * @function actualizarLista
 * @description Actualiza la visualización de la lista de amigos en la página web.
 *
 * Esta función se encarga de:
 *  1. Obtener el elemento HTML donde se visualiza la lista de amigos ('listaAmigos').
 *  2. Iterar sobre el array 'amigos'.
 *  3. Por cada amigo en el array, crear un nuevo elemento de lista (`<li>`) en HTML,
 *     con el nombre del amigo, y añadirlo como hijo al elemento 'listaAmigos'.
 *
 * De esta forma, se re-renderiza la lista de amigos cada vez que se agrega un amigo.
 *
 * @returns {void}
 */
function actualizarLista() {
  // Obtiene el elemento HTML donde se visualiza la lista de amigos.
  lista = document.getElementById("listaAmigos");
  // Itera sobre el array de amigos.
  for (let i = 0; i < amigos.length; i++) {
    // Añade un nuevo item de lista (<li>) al elemento 'listaAmigos' por cada amigo en el array.
    lista.innerHTML += `<li>${amigos[i]}<\li>`;
  }
}

/**
 * @function limpiarCampoNombre
 * @description Limpia el campo de entrada de texto 'amigo' en la página web.
 *
 * Esta función es útil para resetear el campo de entrada después de agregar un amigo,
 * facilitando la entrada de un nuevo nombre sin necesidad de borrar manualmente.
 *
 * @returns {void}
 */
function limpiarCampoNombre() {
  // Establece el valor del campo de entrada 'amigo' a una cadena vacía, limpiando el campo.
  document.getElementById("amigo").value = "";
}

/**
 * @function sortearAmigo
 * @description Sortea un amigo aleatorio de la lista y muestra el resultado en la página web.
 *
 * Primero, verifica si la lista de amigos no está vacía.
 * Si la lista está vacía, muestra una alerta pidiendo al usuario que agregue amigos a la lista antes de sortear.
 * Si la lista tiene amigos:
 *  1. Genera un índice aleatorio dentro del rango de la longitud del array 'amigos'.
 *  2. Utiliza este índice para seleccionar un amigo aleatorio del array.
 *  3. Muestra el nombre del amigo sorteado en el elemento HTML 'resultado'.
 *
 * @returns {void}
 */
function sortearAmigo() {
  // Obtiene la cantidad de amigos en la lista.
  let N = amigos.length;

  // Valida si la lista de amigos está vacía.
  if (N == 0) {
    // Muestra una alerta si no hay amigos en la lista para sortear.
    alert("Por favor, agrega amigos a la lista!");
    return; // Sale de la función si la lista está vacía.
  }
  // Muestra el nombre del amigo sorteado en el elemento 'resultado' del HTML.
  document.getElementById("resultado").innerHTML = `${
    amigos[Math.floor(Math.random() * N)] // Selecciona un amigo aleatorio del array.
  }`;
}

/**
 * @listens keydown
 * @event keydown#Enter
 * @description Event listener para el campo de entrada de texto 'amigo'.
 *
 * Escucha el evento 'keydown' en el campo de entrada 'amigo'.
 * Si la tecla presionada es 'Enter':
 *  1. Previene el comportamiento por defecto del evento 'Enter' en formularios (evita la sumisión del formulario).
 *  2. Llama a la función 'agregarAmigo' para agregar el nombre digitado a la lista de amigos.
 */
document.getElementById("amigo").addEventListener("keydown", function (event) {
  // Verifica si la tecla presionada es 'Enter'.
  if (event.key === "Enter") {
    // Previene el comportamiento por defecto del 'Enter' en formularios.
    event.preventDefault();
    // Llama a la función 'agregarAmigo' para procesar el nombre digitado.
    agregarAmigo();
  }
});

/**
 * @function limpiarAmigos
 * @description Limpia completamente la lista de amigos, removiendo todos los nombres.
 *
 * Esta función se encarga de:
 *  1. Resetear el array 'amigos' a un array vacío, eliminando todos los amigos almacenados.
 *  2. Llama a la función 'limpiarLista' para limpiar la visualización de la lista en la página.
 *  3. Llama a la función 'actualizarLista' para re-renderizar la lista, que ahora estará vacía.
 *
 * Se utiliza para empezar de cero con una lista de amigos nueva.
 *
 * @returns {void}
 */
function limpiarAmigos() {
  // Vacía el array de amigos, eliminando todos los nombres.
  amigos = [];
  // Limpia la visualización de la lista en el HTML.
  limpiarLista();
  // Actualiza la visualización de la lista, que ahora estará vacía.
  actualizarLista();
}
