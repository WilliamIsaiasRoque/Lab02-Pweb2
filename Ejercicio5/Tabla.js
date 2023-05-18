function generarTabla() {
      var numValores = parseInt(document.getElementById("numValores").value);
      var tablaContainer = document.getElementById("tablaContainer");
      tablaContainer.innerHTML = "";
      var tabla = document.createElement("table");
      var suma = 0;
      for (var i = 0; i < numValores; i++) {
        var valorAleatorio = Math.floor(Math.random() * 51); // Genera un número aleatorio entre 0 y 50
        var fila = tabla.insertRow();
        var celda = fila.insertCell();
        celda.textContent = valorAleatorio;
        suma += valorAleatorio;
      }
      tablaContainer.appendChild(tabla);

      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "";
      var botonCalcularSuma = document.createElement("button");
      botonCalcularSuma.textContent = "Calcular suma";
      botonCalcularSuma.addEventListener("click",function() {
        resultado.innerHTML = "La suma es: "+suma;
      });
      resultado.appendChild(botonCalcularSuma);
}