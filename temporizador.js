const targetDate = new Date('2025-09-04T09:00:00'); // Año, mes, día, hora, minuto, segundo

function startTimer() {
  function updateTimer() {
    const currentTime = new Date(); // Hora actual
    const remainingTime = targetDate - currentTime; // Tiempo restante en milisegundos

    const modal = document.getElementsByClassName("modal")[0];
    const content = document.getElementsByClassName("timer-container")[0];
    
    // Si el tiempo restante es menor o igual a 0, el temporizador ha terminado
    if (remainingTime <= 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";

      content.style.filter = "blur(4px)";

      modal.style.display = "block";
      setTimeout(() => {
        modal.style.opacity = "1"; // Hace visible el modal
        modal.style.transform = "translate(-50%, -50%) scale(1)"; // Modal a su tamaño original
      }, 0);

      return;
    }

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Mostrar el temporizador actualizado
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    document.title = "Estreno en: " + formatTime(days) + "d " + formatTime(hours) + "h " + formatTime(minutes) + "m " + formatTime(seconds) + "s";
  }

  // Función para formatear el tiempo (agregar 0 si es menor a 10)
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Actualiza el temporizador cada segundo
  setInterval(updateTimer, 1000);
}

// Iniciar el temporizador cuando cargue la página
window.onload = startTimer;
