var elDice = document.getElementById('dice');
var elComeOut = document.getElementById('roll');

elComeOut.onclick = function () {
    rollDice();
};

function rollDice() {
    var dice = Math.floor((Math.random() * 6) + 1);

    console.log(dice);

    for (var i = 1; i <= 6; i++) {
        elDice.classList.remove('show-' + i);
        if (dice === i) {
            elDice.classList.add('show-' + i);
        }
    }
}


let timeLeft = 30;
let timer = document.getElementById('timeLeft');
let countdownTimer;

function isTimeLeft() {
    return timeLeft > -1;
}

function startTimer() {
    // Réinitialiser le temps
    timeLeft = 30;

    // Arrêter le compteur s'il est déjà en cours
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }

    const timerElement = document.querySelector('.timer');
    const timerCircle = timerElement.querySelector('svg > circle + circle');
    timerElement.classList.add('animatable');
    timerCircle.style.strokeDashoffset = 1;

    countdownTimer = setInterval(function () {
        if (isTimeLeft()) {
            const timeRemaining = timeLeft--;
            const normalizedTime = (30 - timeRemaining) / 30;
            // for clockwise animation
            // const normalizedTime = (timeRemaining - 30) / 30;
            timerCircle.style.strokeDashoffset = normalizedTime;
            timer.innerHTML = timeRemaining;
        } else {
            clearInterval(countdownTimer);
            timerElement.classList.remove('animatable');
        }
    }, 1000);
}
