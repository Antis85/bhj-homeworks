"use strict";

const leftArrowPrev = document.querySelector(".slider__arrow_prev");
const rightArrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = document.querySelectorAll(".slider__item");
let currentSlideNumber = 0;

rightArrowNext.onclick = () => {  
  if (currentSlideNumber < sliderItems.length - 1) {    
    currentSlideNumber++;
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
    sliderItems.item(currentSlideNumber - 1).className = "slider__item";
  }
  else {    
    currentSlideNumber = 0;
    sliderItems.item(sliderItems.length - 1).className = "slider__item";
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
  } 
}

leftArrowPrev.onclick = () => {  
  if (currentSlideNumber > 0) {
    currentSlideNumber--;
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
    sliderItems.item(currentSlideNumber + 1).className = "slider__item";
  }
  else {    
    currentSlideNumber = 4;
    sliderItems.item(sliderItems.length - 1 - currentSlideNumber).className = "slider__item";
    sliderItems.item(currentSlideNumber).className += " slider__item_active";
  }
}
