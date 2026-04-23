let timer;
let seconds = 0;
let isRunning = false;

function formatTime(sec) {
  let hrs = Math.floor(sec / 3600);
  let mins = Math.floor((sec % 3600) / 60);
  let secs = sec % 60;

  return (
    String(hrs).padStart(2, '0') + ":" +
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0')
  );
}

function updateDisplay() {
  document.getElementById("display").innerText = formatTime(seconds);
}

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  isRunning = false;
  clearInterval(timer);
}

function reset() {
  isRunning = false;
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    let li = document.createElement("li");
    li.innerText = formatTime(seconds);
    document.getElementById("laps").appendChild(li);
  }
}