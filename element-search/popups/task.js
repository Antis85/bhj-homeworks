"use strict";

const modalWindowShow = document.getElementById("modal_main");
modalWindowShow.className += " modal_active";

const modalWindowsClose = document.querySelectorAll("div.modal__close");
modalWindowsClose[0].onclick = () => {
  modalWindowShow.className = "modal";
};
modalWindowsClose[1].onclick = () => {
  modalWindowShow.className = "modal";
  modalSuccessWindowShow.className = "modal";
};

const modalSuccessWindowShow = document.getElementById("modal_success");
const showSuccess = document.querySelector("a.show-success");
showSuccess.onclick = () => {
  modalSuccessWindowShow.className += " modal_active";
};

