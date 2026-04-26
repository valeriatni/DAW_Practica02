const input = document.getElementById("texto");

const btnMostrar = document.getElementById("mostrar");

const resultado = document.getElementById("resultado");


btnMostrar.addEventListener("click",() =>{
    resultado.textContent = "Tareas: " + JSON.stringify(tareas);
});