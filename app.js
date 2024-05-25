var redsig = document.getElementById("red")
var yellowsig = document.getElementById("yellow")
var greensig = document.getElementById("green")
var showTimer = document.getElementById("timer")
let count = 25;

function green() {
    greensig.className += " green"
}
function yellow() {
    yellowsig.className += " yellow"
}
function red() {
    redsig.className += " red"
}
var startbtn = document.getElementById("startbtn")
var interval;
function render() {
    showTimer.innerHTML = count;
    if (count <= 25) {
        red()
        greensig.classList.remove("green")
        yellowsig.classList.remove("yellow")
        showTimer.className = "timer_red"
    } if (count <= 16) {
        yellow()
        redsig.classList.remove("red")
        greensig.classList.remove("green")
        showTimer.className = "timer_yellow"

    } if (count <= 12) {
        green()
        yellowsig.classList.remove("yellow")
        redsig.classList.remove("red")
        showTimer.className = "timer_green"
    }
    if (count < 1) {
        showTimer.className = "timer_red"
        greensig.classList.remove("green")
        yellowsig.classList.remove("yellow")
        redsig.classList.remove("red")
        count = 25
        red()
    }
    count--
    startbtn.disabled = true
}
function startSig() {
    interval = setInterval(function () {
        render()
    }, 1000)
}
function stopSig() {
    clearInterval(interval)
    startbtn.disabled = false
}