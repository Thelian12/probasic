const tareaInput = document.getElementById("tareainput")
const agregarBtn = document.getElementById("agregarBtn")
const listaTareas = document.getElementById("listatareas")

// Colocar cursor dentro del input de texto 
window.onload = function() {
    tareaInput.focus()
}

//agregar evento al boton
agregarBtn.addEventListener("click", agregarTarea)

//Agregar el evento con la tecla enter
tareaInput.addEventListener("keypress",function(event) {
    if(event.key == "Enter") {
        agregarTarea()
    }
})

function agregarTarea() {
    const textoTarea =  tareaInput.value.trim()
    if(textoTarea === "") {
        alert("Por favor, escribe una tarea")
        return
    }
    const li = document.createElement("li")
    li.textContent =textoTarea

    const btnEliminar = document.createElement("button")
    btnEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnEliminar.classList.add('btn-eliminar')

    //Agregar evento de eliminar
    btnEliminar.addEventListener("click", function() {
        listatareas.removeChild(li)
    })

    li.appendChild(btnEliminar)
    
    //agregar elemento li dentro del ul
    listatareas.appendChild(li)

    //Limpiar y enfocar el input
    tareaInput.value = ""
    tareaInput.focus()
}