/*NAVBAR*/
let mainNav = document.getElementById('nav-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', () => {
    
    mainNav.classList.toggle('active');

});

let navbarBg = document.getElementById("nav");

window.onscroll = () => {
  "use strict";
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
    navbarBg.classList.add("scroll");
  } else {
    navbarBg.classList.remove("scroll");
  }
};