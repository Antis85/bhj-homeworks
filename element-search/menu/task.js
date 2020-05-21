"use strict";

const menuLink = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuLink.length; i++) {
  const menuSub = menuLink.item(i).parentElement.querySelector(".menu_sub");
  menuLink.item(i).onclick = () => {
    if (menuSub) {
      if (!menuSub.className.includes("menu_active")) {
        menuSub.className += " menu_active";
      }
      //console.log("false click");
      return false;
    }
  }
}
