"use strict";

const revealDivs = document.querySelectorAll(".reveal");

const isInViewport = function (element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  return (elementTop < viewportHeight && elementTop >= 0) ? true : false;
};

window.addEventListener('scroll', () => {
  for (const div of revealDivs) {    
    isInViewport(div) ? div.classList.add("reveal_active") : false;
  }
});
