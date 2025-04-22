// Seleccionar los elementos del DOM
const startButton = document.getElementById('start-game');
const levelModal = document.getElementById('level-modal');
const closeModalButton = document.getElementById('close-modal');

// Mostrar el modal al presionar "Iniciar Juego"
startButton.addEventListener('click', () => {
  levelModal.style.display = 'flex'; // Mostrar el modal
});

// Cerrar el modal al presionar el botón "Cerrar"
closeModalButton.addEventListener('click', () => {
  levelModal.style.display = 'none'; // Ocultar el modal
});


