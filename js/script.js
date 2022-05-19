const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const millisecondsIndex = document.getElementById("millisecondsIndex");
const secondsIndex = document.getElementById("secondsIndex");
const minutesIndex = document.getElementById("minutesIndex");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let running = false;

startButton.onclick = function () {
  if (running === true) {
    return;
  }

  running = true;
  timer = setInterval(function () {
    milliseconds = milliseconds + 1;
    if (milliseconds === 100) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    millisecondsIndex.innerText = milliseconds;
    secondsIndex.innerText = seconds;
    minutesIndex.innerText = minutes;

    if (milliseconds < 10) {
      millisecondsIndex.innerText = "0" + milliseconds;
    }
    if (seconds < 10 || seconds == 0) {
      secondsIndex.innerText = "0" + seconds;
    }
    if (minutes < 10 || minutes == 0) {
      minutesIndex.innerText = "0" + minutes;
    }
  }, 10);
};

stopButton.onclick = function () {
  clearInterval(timer);
  running = false;
};

resetButton.onclick = function () {
  clearInterval(timer);
  running = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  millisecondsIndex.innerText = "00";
  secondsIndex.innerText = "00";
  minutesIndex.innerText = "00";
};
