const countdown = () => {
    const endDate = new Date("January 1, 2030 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        clearInterval(timer);
        document.querySelector(".wrapper").innerHTML = "<h1 style='color: #41b3cf; text-align:center;'>🚀 Bem-vindo à década 2030! Vamos conquistar o futuro! ✨</h1>";
        startFireworks();
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
};

const timer = setInterval(countdown, 1000);

countdown();

const canvas = document.getElementById("universeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworks = [];
function createFireworks() {
    for (let i = 0; i < 100; i++) {
        fireworks.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
            color: "rgba(255, 0, 0, 1)"
        });
    }
}

function drawFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework) => {
        ctx.beginPath();
        ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();

        firework.x += firework.speedX;
        firework.y += firework.speedY;

        if (firework.x > canvas.width || firework.x < 0) firework.speedX = -firework.speedX;
        if (firework.y > canvas.height || firework.y < 0) firework.speedY = -firework.speedY;
    });
}

function startFireworks() {
    createFireworks();
    function animateFireworks() {
        drawFireworks();
        requestAnimationFrame(animateFireworks);
    }
    animateFireworks();
}
