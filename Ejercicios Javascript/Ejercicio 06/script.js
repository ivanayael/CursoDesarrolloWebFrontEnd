// script.js
let workTime = 25 * 60; // 25 minutos en segundos
let breakTime = 5 * 60; // 5 minutos en segundos
let isWorkTime = true;
let timer;
let timeLeft = workTime;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const emoticonDisplay = document.getElementById('emoticon');

const emoticons = ["😊", "😂", "😍", "😎", "😜", "🤔", "😁", "🥳", "😇", "🤗"];

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function drawRandomEmoticon() {
    const randomIndex = Math.floor(Math.random() * emoticons.length);
    const randomEmoticon = emoticons[randomIndex];
    emoticonDisplay.textContent = randomEmoticon;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            isWorkTime = !isWorkTime;
            timeLeft = isWorkTime ? workTime : breakTime;
            drawRandomEmoticon(); // Dibujar emoticono
            startTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    isWorkTime = true;
    timeLeft = workTime;
    emoticonDisplay.textContent = ""; // Limpiar emoticono al reiniciar
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Inicializar la pantalla
updateDisplay();
