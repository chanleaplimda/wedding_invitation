document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const targetDate = new Date("2024-03-03T17:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

        if (distance < 0) {
            timerElement.innerHTML = "The Big Day is Here!";
        }
    }

    setInterval(updateTimer, 1000);
});

function playFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        fireworksContainer.appendChild(firework);

        setTimeout(() => firework.remove(), 1000);
    }
}

function toggleMusic() {
    const music = document.getElementById('background-music');
    const button = document.getElementById('music-toggle');
    if (music.paused) {
        music.play();
        button.textContent = 'Pause Music';
    } else {
        music.pause();
        button.textContent = 'Play Music';
    }
}