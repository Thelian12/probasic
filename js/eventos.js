// Evento Click
document.getElementById("btnclick").addEventListener("click", () => {
  alert("¡Hiciste clic!");
});

// Evento Doble Clic
document.getElementById("btndblclick").addEventListener("dblclick", () => {
  alert("¡Doble clic detectado!");
});

// Evento Mouseover
document.getElementById("btnhover").addEventListener("mouseover", () => {
  console.log("Pasaste el mouse por encima del botón!");
});

// Evento Teclado
document.getElementById("inputteclado").addEventListener("keydown", (e) => {
  console.log("Tecla presionada: " + e.key);
});

// Evento Formulario
document.getElementById("formdemo").addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue
  alert("Formulario enviado con éxito!");
});

document.getElementById("btnColor").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

document.getElementById("btnToggle").addEventListener("click", () => {
  const p = document.getElementById("parrafo");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
});

document.getElementById("btnHora").addEventListener("click", () => {
  const ahora = new Date();
  document.getElementById("hora").textContent =
    "Hora actual: " + ahora.toLocaleTimeString();
});

let contador = 0;

function sumar() {
  document.getElementById("espaciosuma").innerText = contador++;

  if (contador === 25) {
    alert("CLICKEASTE 25 VECES. PRESIONA F5 PARA VOLVER A EMPEZAR");
  }
}

// document.getElementById("counter").addEventListener("click", sumar);


