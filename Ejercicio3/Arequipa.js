function calcularDiasFaltantes() {
      var fechaActual = new Date();
      var fechaArequipa = new Date(fechaActual.getFullYear(), 7, 15); // 7 representa agosto (enero es 0)
      var unDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un dia
      var diasFaltantes = Math.ceil((fechaArequipa - fechaActual) / unDia);
      document.getElementById("resultado").textContent = "Faltan " + diasFaltantes + " días para el día de Arequipa.";
}
    window.onload=calcularDiasFaltantes;
