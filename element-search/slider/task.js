"use strict";

const leftArrowPrev = document.querySelector(".slider__arrow_prev");
const rightArrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = document.querySelectorAll(".slider__item");
console.log(sliderItems);
let currentSlideNumber = 0;

rightArrowNext.onclick = () => {
  console.log(sliderItems);
  console.log("rightArrowNext");
  console.log(`currentSlideNumber_before_if: ${currentSlideNumber}`);

  if (currentSlideNumber < sliderItems.length - 1) {

    console.log(`currentSlideNumber_in_true_if: ${currentSlideNumber}`);
    currentSlideNumber++;
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
    sliderItems.item(currentSlideNumber - 1).className = "slider__item";
  }

  else {

    console.log(`currentSlideNumber_in_false_if: ${currentSlideNumber}`);
    currentSlideNumber = 0;
    sliderItems.item(sliderItems.length - 1).className = "slider__item";
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
  }

  console.log(`currentSlideNumber_after_if: ${currentSlideNumber}`);
  console.log(sliderItems);
}

leftArrowPrev.onclick = () => {
  console.log(sliderItems);
  console.log("leftArrowPrev");
  console.log(`currentSlideNumber_before_if: ${currentSlideNumber}`);

  if (currentSlideNumber > 0) {

    console.log(`currentSlideNumber_in_true_if: ${currentSlideNumber}`);
    currentSlideNumber--;
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
    sliderItems.item(currentSlideNumber + 1).className = "slider__item";
  }

  else {

    console.log(`currentSlideNumber_in_false_if: ${currentSlideNumber}`);
    currentSlideNumber = 4;
    sliderItems.item(sliderItems.length - 1 - currentSlideNumber).className = "slider__item";
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
  }

  console.log(`currentSlideNumber_after_if: ${currentSlideNumber}`);
  console.log(sliderItems);
}
