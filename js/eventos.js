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


// Crear un objeto Date
const date_ejm = new Date();

// Mostrar la fecha completa
console.log("Fecha completa:", date_ejm);

// Extraer y mostrar partes de la fecha
console.log("Día semana (número): " + date_ejm.getDay()); // 0 = Domingo, 1 = Lunes, ...
console.log("Día del mes: " + date_ejm.getDate());
console.log("Mes (número): " + (date_ejm.getMonth() + 1)); // +1 porque empieza en 0
console.log("Año: " + date_ejm.getFullYear());
console.log("Hora: " + date_ejm.getHours());
console.log("Minutos: " + date_ejm.getMinutes()); // ← corregido (era 'getMinutos')
console.log("Segundos: " + date_ejm.getSeconds());
console.log("Milisegundos: " + date_ejm.getMilliseconds());

// Arrays con nombres
const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Mostrar nombre del día y mes
console.log("Día de la semana: " + dias[date_ejm.getDay()]);
console.log("Mes del año: " + meses[date_ejm.getMonth()]);
