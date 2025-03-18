// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista de amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputNombre.value = "";
    
    // Actualizar la lista en la interfaz
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Recorrer el array de amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

// Función para seleccionar aleatoriamente un amigo de la lista
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    // Validar que haya amigos disponibles para el sorteo
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}