let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerHTML = "Start";
        isRunning = false;
    } else {
        startTime = new Date().getTime();
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        isRunning = true;
    }
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("display").innerHTML = formattedTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

function reset() {
    clearInterval(timer);
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("laps").innerHTML = "";
    isRunning = false;
    lapCount = 1;
}

function lap() {
    const lapTime = document.getElementById("display").innerHTML;
    const lapItem = document.createElement("li");
    lapItem.innerHTML = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
    lapCount++;
}
