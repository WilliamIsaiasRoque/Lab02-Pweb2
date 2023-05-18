function mostrarDiaSemana() {
      const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const fechaActual = new Date();
      const numeroDia = fechaActual.getDay();
      const diaSemana = diasSemana[numeroDia];
      document.getElementById("resultado").textContent=`Número recibido: ${numeroDia} / Día de la semana: ${diaSemana}`;
}

