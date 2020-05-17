"use strict";

/*
//Основное задание
const counterId = setInterval(() => {
let counterTimer = document.getElementById("timer");
  if (counterTimer.textContent == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(counterId);    
  } else {
    counterTimer.textContent--;
  }
}, 100);//ускорение времени = true
*/

//Дополнительное задание №1,2

let hh = 1;
let mm = 2;
let ss = 0;//задаем начальное значение счетчика чч:мм:сс

const counterId = setInterval(() => {
  let counterTimer = document.getElementById("status");//писать здесь id "timer" нет смысла ИМХО, ибо получается "До окончания конкурса осталось секунд: 00ч:00м:00с", а тут уже не только секунды.
  let hh1, mm1, ss1;
  if (ss == 0) {
    if (mm == 0) {
      if (hh == 0) {
        clearInterval(counterId);
        alert("Да свершится загрузка!");
        location.assign("https://download.mozilla.org/?product=firefox-stub&os=win&lang=ru");
      } else {
        hh--;
        mm = 59;
      }
    } else {
      mm--;
      ss = 59;
    }
  } else {
    ss--;
  }

  if (hh < 10) {
    hh1 = "0" + hh;
  } else {
    hh1 = hh;
  }
  if (mm < 10) {
    mm1 = "0" + mm;
  } else {
    mm1 = mm;
  }
  if (ss < 10) {
    ss1 = "0" + ss;
  } else {
    ss1 = ss;
  }

  counterTimer.textContent = `До окончания конкурса осталось: ${hh1}ч:${mm1}м:${ss1}с`;
  //console.log(`${hh1}:${mm1}:${ss1}`);

}, 10);//ускорение времени = true
