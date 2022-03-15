/* Initializing AOS library (to enable scroll animations in our HTML) */
AOS.init();

/* This function is for navbar (to do something everytime the viewport width is changed) */

function myFunction(x) {
    if (x.matches) { // If media query matches
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class','menu-btn');
        const header = document.querySelector('header');
        header.appendChild(newDiv);
        const burger = document.createElement('div');
        burger.setAttribute('class', 'menu-btn__burger');
        newDiv.appendChild(burger);
    } 
  }
  
var x = window.matchMedia("(min-width: 300px)")
myFunction(x) // Call listener function at run time

const menuBtn = document.querySelector('.menu-btn');
const navContainer = document.querySelector('header .overlay');
const navLinks = document.querySelectorAll('header .overlay a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navContainer.classList.toggle('showParent');
});

for (const navLink of navLinks) {
    navLink.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navContainer.classList.toggle('showParent');
    });
}

/* When page is scrolled down, the navbar hides, when scrolled up, the navbar shows */

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('header').style.top = '0';
        let bodyRect = document.body.getBoundingClientRect().top,
        elemRect = document.querySelector('header').getBoundingClientRect().top,
        offset   = elemRect - bodyRect;

        if (offset >= 0 && offset <= 2) {
            document.querySelector('header').style.backgroundColor = '#FCCA5F00';
            let temps = document.querySelectorAll('header a');
            for (const temp of temps) {
                temp.style.color = '#F9F7E5';
            }
        } else {
            document.querySelector('header').style.backgroundColor = '#01764290';
            let temps = document.querySelectorAll('header a');
            for (const temp of temps) {
                temp.style.color = 'white';
            }

        }
    } else {
        document.querySelector('header').style.top = '-8rem';
    }

    prevScrollpos = currentScrollPos;

}

const main = document.querySelector('main');
let mainY = main.getBoundingClientRect().top;
let mainX = main.getBoundingClientRect().left;

/* Using flickity to make a carousel (testimony) */

let flkty = new Flickity( '.testimoni__items', {
    // options
    cellAlign: 'center',
    wrapAround: true,
    autoPlay: 2500
  });

const flickityDots = document.querySelector('.flickity-page-dots');
flickityDots.style.bottom = '22px';
flickityDots.parentNode.style.marginBottom = '5rem';


/* smooth scrolling */

const links = document.querySelectorAll("nav a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

