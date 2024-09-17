const galleryThumbs = document.querySelectorAll('.gallery-thumb');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('full-img');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close')[0];

// Añadimos un evento click a cada miniatura de la galería
galleryThumbs.forEach(item => {
  item.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; // El texto alternativo será el título
  });
});

// Evento para cerrar el modal
closeModal.onclick = function() {
  modal.style.display = 'none';
};

// Cierra el modal si se hace click fuera de la imagen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};