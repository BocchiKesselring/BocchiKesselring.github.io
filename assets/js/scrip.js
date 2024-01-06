document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles-container');

    // Crear partículas
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        particlesContainer.appendChild(particle);
    }

    // Animar partículas
    anime({
        targets: '.particle',
        translateY: [
            { value: '100vh', duration: 0 },
            { value: '-100vh', duration: 6000 }
        ],
        opacity: [
            { value: 0, duration: 0 },
            { value: 1, duration: 2000 },
            { value: 0, duration: 3000 }
        ],
        backgroundColor: function () {
            return anime.random(['#ff0000', '#00ff00', '#0000ff']);
        },
        easing: 'linear',
        delay: anime.stagger(100),
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
const particlesContainer = document.getElementById('particles-container-footer');

for (let i = 0; i < 200; i++) {
const particle = document.createElement('div');
particle.className = 'particle-footer';
particle.style.left = '0';
particle.style.top = `${Math.random() * 100}vh`;

particlesContainer.appendChild(particle);
}

anime({
targets: '.particle-footer',
translateX: [
    { value: '100vw', duration: 20000 }
],
translateY: () => anime.random(-50, 90) + 'vh',
opacity: [
    { value: 0, duration: 0 },
    { value: 1, duration: 2000 },
    { value: 0, duration: 6000 }
],
easeOutQuad: 'easeInOutExpo',
delay: anime.stagger(50),
loop: true
});
});