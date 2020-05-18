"use strict";

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

let counterWin = 0;
let counterLost = 0;
const deadCounterText = document.getElementById("dead");
const lostCounterText = document.getElementById("lost");

for (let i = 1; i < 10; i++) {

  getHole(i).onclick = () => {
    if (getHole(i).className.includes("hole_has-mole")) {
      counterWin++;      
    } else {
      counterLost++;      
    }

    if (counterWin >= 10) {      
      counterWin = 0;
      counterLost = 0;      
      alert("Победа!");
    }

    if (counterLost >= 5) {      
      counterWin = 0;
      counterLost = 0;      
      alert("Вы проиграли!");
    }
    deadCounterText.textContent = counterWin;
    lostCounterText.textContent = counterLost;
  }
}
