'use strict'

// nav buttons
const navBtnLeft = document.querySelector(".slider__arrow--prev");
const navBtnRight = document.querySelector(".slider__arrow--next");

//------------- SLIDER SELECTORS
const slider = document.querySelector(".slider");
const sliderSlides = document.querySelector(".slider__slides");
const slides = document.querySelectorAll(".slider__slide__alignment");

let currSlide = 0;
let slideIntervalId;
const delay = 4250;
const maxSlides = slides.length - 1;


//Sliding functionality
const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${ (i - slide) * 100}%)`);
}

//Align all slides to side
goToSlide(currSlide);

//Adds 1 to current slide.
const nextSlide = function() {
    currSlide === maxSlides ? currSlide = 0 : currSlide++;
}

//Substracts 1 to current slide.
const prevSlide = function() {
    currSlide === 0 ? currSlide = maxSlides : currSlide--;
}

//Creates the alignment and the 
const initNextSlide = function () {
    nextSlide();
    goToSlide(currSlide);
}

const initPrevSlide = function () {
    prevSlide();
    goToSlide(currSlide);
}

const initSlideInterval = function () {
    if (!slideIntervalId) {
        slideIntervalId = setInterval(initNextSlide, delay);
    } else {
        clearSlideInterval();
        slideIntervalId = setInterval(initNextSlide, delay);
    }
}

const clearSlideInterval = function () {

    if(slideIntervalId) {
        clearInterval(slideIntervalId)
        slideIntervalId = null;
    } 
}

//Click events to sliders buttons 
//Event for right arrow, moves 1 slide to the right
navBtnRight.addEventListener('click', function(){
    initNextSlide();
    clearSlideInterval();
    setTimeout(initSlideInterval, delay);
})

//Event for left arrow, moves 1 slide to the left
navBtnLeft.addEventListener('click', function(){
    initPrevSlide();
    clearSlideInterval();
    setTimeout(initSlideInterval, delay);
})

window.addEventListener('load', function() {
    goToSlide(currSlide);
    initSlideInterval();
})
