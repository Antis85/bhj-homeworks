"use strict";

const leftArrowPrev = document.querySelector(".slider__arrow_prev");
const rightArrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
let currentSlideNumber = 0;

function setSliderItem(slideNumber) {
  sliderItems[slideNumber].classList.add("slider__item_active");
  sliderItems.forEach((item, index) => {
    if (index !== slideNumber) {
      sliderItems[index].classList.remove("slider__item_active");
    }
  })
}

rightArrowNext.onclick = () => {  
  if (currentSlideNumber < sliderItems.length - 1) {    
    currentSlideNumber++;
    setSliderItem(currentSlideNumber);    
  }
  else {   
    currentSlideNumber = 0;
    setSliderItem(currentSlideNumber);    
  }  
}

leftArrowPrev.onclick = () => {  
  if (currentSlideNumber > 0) {    
    currentSlideNumber--;
    setSliderItem(currentSlideNumber);    
  }
  else {
    currentSlideNumber = 4;
    setSliderItem(currentSlideNumber);   
  }
}
