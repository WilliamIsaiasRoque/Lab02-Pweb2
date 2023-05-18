function invertir() {
  const textoOriginal = document.getElementById("contenido").value;
  let nuevoTexto = "";
  for (let i = textoOriginal.length - 1; i >= 0; i--) {
    nuevoTexto += textoOriginal[i];
  }
  document.getElementById("invertido").innerHTML = nuevoTexto;
}



