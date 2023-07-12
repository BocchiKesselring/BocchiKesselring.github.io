// Espera a que el DOM se haya cargado completamente antes de ejecutar el código JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Obtener una referencia al formulario
    const form = document.getElementById('task-form');

    // Manejar el evento submit del formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe

      // Obtener los valores ingresados en los campos de texto y textarea
      const title = document.getElementById('task-title').value;
      const description = document.getElementById('task-description').value;
      const startDate = document.getElementById('task-start-date').value;
      const dueDate = document.getElementById('task-due-date').value;

      // Mostrar los valores ingresados en la consola
      console.log('Título:', title);
      console.log('Descripción:', description);
      console.log('Fecha de inicio:', startDate);
      console.log('Fecha de término:', dueDate);

      // Aquí puedes realizar otras acciones con los valores ingresados, como guardarlos en una base de datos, mostrarlos en la página, etc.
    });
  });