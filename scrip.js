document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.ver-mas');
    buttons.forEach(button => {
      const details = button.getAttribute('data-details');
      button.addEventListener('click', function() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = details;
        button.parentNode.appendChild(popup);
        button.removeEventListener('click', this);
        document.addEventListener('click', function(event) {
          if (!popup.contains(event.target) && !button.contains(event.target)) {
            popup.style.display = 'none';
          }
        });
        popup.style.display = 'block';
      });
    });
  });
