"use strict";

const chatWindow = document.querySelector(".chat-widget");
chatWindow.addEventListener('click', () => {
  chatWindow.classList.add("chat-widget_active");
});

function robotMessageText() {
  const robotText = [
    "Ой, да ладно, не начинайте!",
    "Сказано же - напишите завтра, а то каждый раз всё сегодня пишите...",
    "А почему у Вас глаза красные?",
    "Почему от Вас луком пахнет?",
    "Отнюдь, но, тем не менее, весьма...",
    "Это Вам не шубу в трусы заправлять!",
    "Тут Вам не здесь!",
    "Всегда, я ваще, а чё?",
    "Не будете платить - отключим от матрицы!",
    "Мы Вас по IP вычислим!",
    "Не знаю, я всего лишь робот",
    "Хоп хэй ла ла лэй",
    "Вы все еще здесь?!",
    "Мы ещё не проснулись. Позвоните через 10 лет"
  ],
    index = Math.floor(Math.random() * robotText.length);

  return robotText[index];
}

function getCurrentFormattedTime() {
  if (new Date().getMinutes() < 10) {
    return new Date().getHours() + ":0" + new Date().getMinutes();
  } else {
    return new Date().getHours() + ":" + new Date().getMinutes();
  }
}

const chatMessages = document.querySelector(".chat-widget__messages");
const chatInput = document.querySelector(".chat-widget__input");

function submitMessage(event) {
  console.log(event.keyCode/*, event.type, event.key, event.code*/);
  console.log(robotMessageText());
  if (event.keyCode == 13 && this.value != "") {
    console.log("Сообщение от клиента", this.value);
    chatMessages.innerHTML += `
  Сообщение от клиента
  <div class="message message_client">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
    ${this.value}    
    </div>
  </div>
`;

    setTimeout(() => {
      chatMessages.innerHTML += `
  Сообщение от робота
  <div class="message">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
    ${robotMessageText()}    
    </div>
  </div>
`;
    }, 1000);
  }
}

chatInput.addEventListener("keypress", submitMessage);
