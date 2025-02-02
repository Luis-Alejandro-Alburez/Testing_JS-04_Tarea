document.getElementById("convertir").addEventListener("click", function () {
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const medida = document.getElementById("medida").value;

  // Ocultar el elemento correspondiente a la medida seleccionada
  document.querySelectorAll(".conversion").forEach((conversion) => {
    conversion.style.display = "block"; // Mostrar todos los elementos primero
  });

  if (medida === "metros") {
    document.getElementById("metros-conversion").style.display = "none"; // Ocultar Metros
  } else if (medida === "centimetros") {
    document.getElementById("centimetros-conversion").style.display = "none"; // Ocultar Centímetros
  } else if (medida === "milimetros") {
    document.getElementById("milimetros-conversion").style.display = "none"; // Ocultar Milímetros
  }

  // Realizar las conversiones
  let metros, centimetros, milimetros;

  if (medida === "metros") {
    centimetros = cantidad * 100;
    milimetros = cantidad * 1000;
    metros = cantidad;
  } else if (medida === "centimetros") {
    metros = cantidad / 100;
    milimetros = cantidad * 10;
    centimetros = cantidad;
  } else if (medida === "milimetros") {
    metros = cantidad / 1000;
    centimetros = cantidad / 10;
    milimetros = cantidad;
  }

  // Actualizar los textos
  document.getElementById("metros").textContent = `${metros.toFixed(2)} Metros`;
  document.getElementById("centimetros").textContent = `${centimetros.toFixed(
    2
  )} Centímetros`;
  document.getElementById("milimetros").textContent = `${milimetros.toFixed(
    2
  )} Milímetros`;
});
