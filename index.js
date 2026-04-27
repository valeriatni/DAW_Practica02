const input = document.getElementById("texto");
const btnGuardar = document.getElementById("guardar");



const btnMostrar = document.getElementById("mostrar");

const resultado = document.getElementById("resultado");

let tareas = [];
btnGuardar.addEventListener("click",() =>{
    const valor = input.value;
    if (valor !== "") {
        tareas.push(valor);
        input.value = "";
        console.log("Tarea agregada:", valor);
    }
});

btnMostrar.addEventListener("click",() =>{
    resultado.textContent = "Tareas: " + JSON.stringify(tareas);
});