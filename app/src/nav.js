'use strict'

//------------- MAIN NAV SELECTORS
const mainNav = document.querySelector("#nav-main");
const mainNavMenu = document.querySelector('.nav__menu');
const mainNavList = document.querySelector('.nav__list');
const mainNavListItems = document.querySelectorAll(".nav__menu__item");

//Main nav hambuerguer spans selector 
const mainNavMin = document.querySelector('.nav__menu__min');
const mainNavMinSpans = document.querySelectorAll(".nav__menu__min__bar");
const navMinbar1 = document.querySelector('.min__bar--1');
const navMinbar2 = document.querySelector('.min__bar--2');
const navMinbar3 = document.querySelector('.min__bar--3');




//--------------- MAIN NAV FUNCTIONAILTIES

//Adds spaces for the nav hamburguer
const addLineHeights= function() {
    navMinbar1.style.top = "1rem";
    navMinbar3.style.top = "2rem";
}

//Removes spaces for the nav hamburguer
const removeLineHeights= function() {
    navMinbar1.style.top = "0";
    navMinbar3.style.top = "0";
}

const crossLines = function() {
    navMinbar1.style.transform = "rotate(45deg)";
    navMinbar3.style.transform = "rotate(-45deg)";
    navMinbar2.style.opacity = "0";
}

const uncrossLines = function() {
    //arrows behavior
    navMinbar1.style.transform = "rotate(0deg)";
    navMinbar3.style.transform = "rotate(0deg)";
    navMinbar2.style.opacity = "1";
}

const showNav = function() {
    //main nav behavior
    mainNav.style.height = "36rem";

    //nav list behavior
    mainNavList.style.height = "auto";
    mainNavList.style.opacity = "1";
    mainNavList.style.marginTop= "8rem";

    removeLineHeights();
    setTimeout(crossLines, 200);
}

const hideNav = function() {
    mainNav.style.height = "13rem";

    //nav list behavior
    mainNavList.style.opacity = "0";
    mainNavList.style.marginTop= "0";
    mainNavList.style.height = "1px";

    uncrossLines();
    setTimeout(addLineHeights, 300);
}

// MAIN NAV EVENT LISTENERS

//Event listener for the hamburguer menú
mainNavMin.addEventListener('click', function() {
    if (mainNavMin.classList.contains("closed")) {
        showNav();

        //add and remove states
        mainNavMin.classList.remove("closed");
        mainNavMin.classList.add("open");

    } else if (mainNavMin.classList.contains("open")) {
        hideNav();
        
        //add and remove states
        mainNavMin.classList.remove("open");
        mainNavMin.classList.add("closed");
    }
    
});

//Event listener for the nav links


mainNavList.addEventListener('click', function(e) {
    if (!e.target.classList.contains("secondary")) {
        e.preventDefault();
        if(e.target.classList.contains("nav__menu__link")) {
            const id = e.target.getAttribute("href");
            document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    
            //WE NEEED TO VERIFY IF THIS IS ON TAB PORTRAIT OR SMALLER
            if(window.innerWidth <= 960) {
                hideNav();
                uncrossLines();
        
                mainNavMin.classList.remove("open");
                mainNavMin.classList.add("closed");
            }
        }
    }
})

//On scroll functionality 




//------------- ABOUT NAV 
//------------- ABOUT US NAV SELECTORS
const teamNav = document.querySelector(".about__nav");
const teamNavEls = document.querySelectorAll(".about__nav__el");
const aboutTeam = document.querySelector(".about__team__fullteam"); 
const aboutMembers =  document.querySelector(".about__team__members");

let selectedNavSec = document.querySelector(".active--ns");


const toggleActiveNavSec = function(sel) {
    teamNavEls.forEach(el => el.classList.remove("active--ns"));
    sel.classList.add('active--ns');
}

const showAnimation = function(showEl, hidEl) {
    showEl.style.opacity = "1";
    showEl.style.zIndex = "2";
}

const hideAnimation = function(showEl, hidEl) {
    showEl.style.opacity = "1";
    showEl.style.zIndex = "2";
}

const activateStudioView = function(showEl, hideEl) {
        showEl.style.display = "block";
        showEl.style.opacity = "1";
        showEl.style.zIndex = "2";

        hideEl.style.display = "none";
        hideEl.style.opacity = "0";
        hideEl.style.zIndex = "1";
}

const activateMembersView = function(showEl, hideEl) {
    showEl.style.display = "flex";
    showEl.style.opacity = "1";
    showEl.style.zIndex = "2";
    
    hideEl.style.display = "none";
    hideEl.style.opacity = "0";
    hideEl.style.zIndex = "0";
}

const initaNavSec = function(sel) {
    if(sel.classList.contains('about__nav--studio')) {
        toggleActiveNavSec(sel);
        activateStudioView(aboutTeam, aboutMembers);
    } else if(sel.classList.contains('about__nav--partners')) {
        toggleActiveNavSec(sel);
        activateMembersView(aboutMembers, aboutTeam);
    }

}



if(teamNav) {
    teamNav.addEventListener('click', function(e) {
               
        if(e.target.tagName === "SPAN") {

            selectedNavSec = e.target.closest('p');
            initaNavSec(selectedNavSec);
        }

        //initaNavSec(selectedNavSec);
    })
}

initaNavSec(selectedNavSec);
//initaNavSec(selectedNavSec);





