const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const btnPlay = document.getElementById("btnPlay");
const btnRestart = document.getElementById("btnRestart");

btnRestart.style.display = "none";

let intM,
  intS,
  nSec = 0,
  nMin = 0,
  nHour = 0,
  s = false;

function playM(e) {
  if (e == true) {
    intM = setInterval(() => {
      nSec++;
      sec.innerHTML = nSec;

      if (nSec == 60) {
        nSec = 0;
      } else if (nSec < 10) {
        sec.innerHTML = "0" + nSec;
      }
    }, 1000);
  } else {
    clearInterval(intM);
  }
}

function playS(e) {
  if (e == false) {
    clearInterval(intS);
  } else {
    intS = setInterval(() => {
      nMin++;
      min.innerHTML = nMin;

      if (nMin == 60) {
        nMin = 0;
      } else if (nMin < 10) {
        min.innerHTML = "0" + nMin;
      }
    }, 60000);
  }
}

function playH(e) {
  if (e == false) {
    clearInterval(intH);
  } else {
    intH = setInterval(() => {
      nHour++;
      hour.innerHTML = nHour;

      if (nHour == 60) {
        nHour = 0;
      } else if (nHour < 10) {
        hour.innerHTML = "0" + nHour;
      }
    }, 3.6 * Math.pow(10, 6));
  }
}

function play() {
  if (s == false) {
    s = true;
    btnPlay.innerText = "Stop";
    btnRestart.style.display = "block";

    playH(s);
    playM(s);
    playS(s);
  } else {
    s = false;
    btnPlay.innerText = "Play";

    playH(s);
    playM(s);
    playS(s);
  }
}

function restart() {
  btnRestart.style.display = "none";
  s = true;
  play(s);

  nSec = 0;
  nMin = 0;
  nHour = 0;

  sec.innerHTML = "00";  
  min.innerHTML = "00";  
  hour.innerHTML = "00";  
}
