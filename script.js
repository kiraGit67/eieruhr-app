"use strict";

const startButton = document.querySelector("#start-button");

let alarm = new Audio("sounds/clock-alarm-8761.mp3");
let timerStarted = false;

function startTimer() {
  if (!timerStarted) {
    const timer = document.querySelector("#timer");
    let startTime = new Date().getTime();
    let fiveMinutes = 1000 * 60 * 5;
    let endTime = startTime + fiveMinutes;

    setInterval(function () {
      let timeLeft = endTime - new Date().getTime();

      if (timeLeft > 0) {
        let minutes = timeLeft / (1000 * 60);
        minutes = Math.floor(minutes);

        let seconds = (timeLeft / 1000) % 60;
        seconds = Math.round(seconds);
        seconds = ("0" + seconds).slice(-2);

        let text = "0" + minutes + ":" + seconds;
        timer.innerHTML = text;
      } else {
        alarm.play();
        timer.innerHTML = "00:00";
        timer.classList.add("ready");
      }
    }, 1000);
    timerStarted = true;
  }
}

startButton.addEventListener("click", startTimer);
