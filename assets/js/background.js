const anime = require('animejs');

// Crea un array para almacenar las partículas
const particles = [];

// Función para generar una partícula
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  document.querySelector('.particle-container').appendChild(particle);
  particles.push(particle);
}

// Genera algunas partículas iniciales
for (let i = 0; i < 50; i++) {
  createParticle();
}

// Define la animación para cada partícula
anime({
  targets: particles,
  translateY: () => anime.random(-window.innerHeight, 0), // Mueve las partículas hacia arriba
  translateX: () => anime.random(0, window.innerWidth), // Posición horizontal aleatoria
  scale: () => anime.random(0.5, 1), // Escala aleatoria
  opacity: 0, // Hace que las partículas se desvanezcan
  easing: 'linear',
  duration: () => anime.random(2000, 4000), // Duración aleatoria
  delay: () => anime.random(0, 2000), // Retraso aleatorio
  loop: true // Repite la animación
});