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

//------------- ABOUT US NAV SELECTORS
const teamNavElements = document.querySelectorAll(".about__team__element");
const navAboutTeam = document.querySelector(".about__team__fullteam");
const navAboutMembers =  document.querySelector(".about__team__members");


//--------------- MAIN NAV FUNCTIONAILTY

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
    mainNav.style.height = "15rem";

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

if (navAboutMembers) {
    navAboutMembers.addEventListener('click', function() {
        toggleElementActiveState(teamNavElements, navAboutMembers);
    });
}


console.log(window.innerWidth)







