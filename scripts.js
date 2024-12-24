document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const targetDate = new Date("2024-12-24T00:00:00").getTime();

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

function rsvp() {
    alert("Thank you for your RSVP!");
}

function toggleDetails() {
    const description = document.querySelector('.intro-description');
    description.classList.toggle('hidden');
}
