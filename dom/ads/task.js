"use strict";

const rotatorCases = document.querySelectorAll(".rotator__case");
let currentCaseNumber = 0;

function setRotatorCase(caseNumber) {
  rotatorCases[caseNumber].classList.add("rotator__case_active");
  rotatorCases.forEach((item, index) => {
    if (index !== caseNumber) {
      rotatorCases[index].classList.remove("rotator__case_active");
    }
  })
}

const rotation = setInterval(() => {
  if (currentCaseNumber < rotatorCases.length - 1) {
    currentCaseNumber++;
    setRotatorCase(currentCaseNumber);
  } else {
    currentCaseNumber = 0;
    setRotatorCase(currentCaseNumber);
  }
}, 1000);
