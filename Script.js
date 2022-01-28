var seconds = 0;
var tens = 0;
var minutes = 0;
var OutputSeconds = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var OutputMinutes = document.getElementById('minute')
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;
var p = document.getElementById("p")

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00" ;
    seconds = "00";
    minutes = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
    OutputMinutes.innerHTML = minutes;    
});

function startTime() {
    tens++
    if(tens <= 9) {
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9) {
        OutputTens.innerHTML = tens;
    }

    if(tens > 99) {
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }


    if(seconds >= 60) {
        minutes++;
        seconds = 0;
        tens = 0;
        OutputMinutes.innerHTML = '0' + minutes;
        OutputSeconds.innerHTML = "0" + seconds;
        OutputTens.innerHTML = "0" + tens;
    }
    if(minutes >= 60) {
        tens = 0;
        minutes = 0;
        seconds = 0;
        OutputMinutes.innerHTML = '0' + minutes;
        OutputSeconds.innerHTML = "0" + seconds;
        OutputTens.innerHTML = "0" + tens;
    }
}