"use strict";

const dropdownList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownItems = document.querySelectorAll(".dropdown__item");
// console.log(`dropdownValue: ${dropdownValue.textContent}`);

function listDropdown() {
  if (dropdownList.className.includes("dropdown__list_active")) {
    dropdownList.className = "dropdown__list";
  } else {
    dropdownList.className += " dropdown__list_active";
  }
  return false;
};

dropdownValue.addEventListener('click', listDropdown);

for (let i = 0; i < dropdownItems.length; i++) {
  dropdownItems.item(i).addEventListener('click', function (event) {
    dropdownValue.textContent = dropdownItems.item(i).textContent;
    dropdownList.className = "dropdown__list";
    event.preventDefault();
    // console.log(`dropdownList: ${dropdownList.className}`);
    // console.log(`dropdownValue: ${dropdownValue.textContent}`);
    // console.log("CLICK");
  });
}
