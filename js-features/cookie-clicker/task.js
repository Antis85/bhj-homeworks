"use strict";

const cookieImage = document.getElementById("cookie");
const counterClick = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let arr = [0];

function timeKiller() {
  if (cookieImage.width <= 200) {//шатание печенега
    cookieImage.width *= 1.1;
    cookieImage.height *= 1.1;
  } else {
    cookieImage.width /= 1.1;
    cookieImage.height /= 1.1;
  }
  counterClick.textContent++;//счетчик кликов

  let clickTime = Date.now();//счетчик скорости кликов  
  arr.push(clickTime);
  //console.log(`arr after push${arr}`);
  if (arr.length > 2) {
    arr.shift();
  }
  //console.log(`arr after clean${arr}`);
  clickerSpeed.textContent = (1000 / (arr[arr.length - 1] - arr[arr.length - 2])).toFixed(2);
}

cookieImage.onclick = timeKiller;
