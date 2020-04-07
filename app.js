console.log("timer app");

// setTimeout(function(){}, 5000);
// setInterval(function(){},1000);

var startBtn = document.querySelector(".start-btn");
var pauseBtn = document.querySelector(".pause-btn");
var resetBtn = document.querySelector(".reset-btn");
var counter = document.querySelector(".counter")

var timerID = null;
var seconds = 0;

counter.textContent = seconds;

var handleStart = () => {
    //guard condition
    if (timerID) {
        startBtn.disabled = true;
        return;
    }
    //start timer
    timerID = setInterval(() => {
        seconds++;
        counter.textContent = seconds;
    }, 1000);
    pauseBtn.disabled = false;
    startBtn.disabled = true;
}

var handlePause = () => {
    // pause the timer
    clearInterval(timerID);
    // resets to default condition to pass guard condition
    timerID = null;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

var handleReset = () => {
    // reset the timer
    clearInterval(timerID);
    // resets to default condition to pass guard condition
    timerID = null;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    seconds = 0;
}

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
resetBtn.addEventListener("click", handleReset);