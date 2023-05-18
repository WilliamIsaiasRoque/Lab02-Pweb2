function obtenerCodigoSesion() {
  var url = document.getElementById("url").value;
  //Verificar si la URL tiene el prefijo https://
  if (url.startsWith("https://")) {
    url = url.slice(8);
  }
  //Verificar si la URL tiene el prefijo meet.google.com/
  if (url.startsWith("meet.google.com/")) {
    url = url.slice(16);
  }
  //Si la cantidad de caracteres es distinto de 12 arrojara mensaje de error
  if (url.length !== 12) {
    document.getElementById("resultado").textContent = "URL no válida";
    return;
  }
  var codigoSesion = url.replace(/-/g, "");
  document.getElementById("resultado").textContent = "Código de meet: " + codigoSesion;
}