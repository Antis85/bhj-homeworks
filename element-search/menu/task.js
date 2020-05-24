"use strict";

const menuLink = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuLink.length; i++) {
  const menuSub = menuLink.item(i).parentElement.querySelector(".menu_sub");
  menuLink.item(i).onclick = () => {
    if (menuSub) {
      if (!menuSub.classList.contains("menu_active")) {
        menuSub.classList.add("menu_active");
      } else {
        menuSub.classList.remove("menu_active");
      }     
      return false;
    }
  }
}
