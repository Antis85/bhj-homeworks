"use strict";

const modalWindowShow = document.getElementById("modal_main");
modalWindowShow.classList.add("modal_active");

const modalWindowsClose = document.querySelectorAll("div.modal__close");
modalWindowsClose[0].onclick = () => {
  modalWindowShow.classList.remove("modal_active");
};
modalWindowsClose[1].onclick = () => {
  modalWindowShow.classList.remove("modal_active");
  modalSuccessWindowShow.classList.remove("modal_active");
};

const modalSuccessWindowShow = document.getElementById("modal_success");
const showSuccess = document.querySelector("a.show-success");
showSuccess.onclick = () => {
  modalWindowShow.classList.remove("modal_active");
  modalSuccessWindowShow.classList.add("modal_active");  
};


