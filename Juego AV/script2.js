// Seleccionar las cajas y los cajones
const boxes = document.querySelectorAll('.box');
const slots = document.querySelectorAll('.slot');

// Variable para realizar un seguimiento del orden actual
let currentOrder = 1;

// Función para manejar el evento "dragstart"
boxes.forEach(box => {
  box.addEventListener('dragstart', () => {
    box.classList.add('dragging');
  });

  box.addEventListener('dragend', () => {
    box.classList.remove('dragging');
  });
});

// Función para manejar el evento "dragover" y permitir el "drop"
slots.forEach(slot => {
  slot.addEventListener('dragover', event => {
    event.preventDefault();
  });

  slot.addEventListener('drop', event => {
    const draggingBox = document.querySelector('.dragging');
    const boxOrder = parseInt(draggingBox.getAttribute('data-order'));
    const slotOrder = parseInt(slot.getAttribute('data-order'));

    // Validar si la caja corresponde al cajón y sigue el orden correcto
    if (boxOrder === currentOrder && boxOrder === slotOrder) {
      slot.appendChild(draggingBox); // Colocar la caja en el cajón correcto
      currentOrder++; // Avanzar al siguiente orden
    } else {
      alert("Debes colocar las cajas en el orden correcto de abajo hacia arriba.");
    }
  });
});
