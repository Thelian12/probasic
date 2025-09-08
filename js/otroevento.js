let contadordos = 0;

function sumardos() {
  document.getElementById("contar").innerHTML = "Contador: " + contadordos++;

  if (contadordos === 25) {
    alert("CLICKEASTE 25 VECES. PRESIONA F5 PARA VOLVER A EMPEZAR");
  }
}
document.getElementById("contar").addEventListener("click", sumardos);
