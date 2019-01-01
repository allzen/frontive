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


const superman = {
    name: 'Superman',
    description: 'Hero description lorem....',
    image: 'superman.jpg',
    price: '9999',
    isAvailable: true
 }

 
const hulk = {
    name: 'hulk',
    description: 'Hero description lorem....',
    image: 'hulk.jpg',
    price: '9999',
    isAvailable: true
 }

 const thor = {
    name: 'thor',
    description: 'Hero description lorem....',
    image: 'thor.jpg',
    price: '9999',
    isAvailable: true
 }
 
 const ironman = {
    name: 'ironman',
    description: 'Hero description lorem....',
    image: 'ironman.jpg',
    price: '9999',
    isAvailable: true
 }

 const potter = {
    name: 'potter',
    description: 'Hero description lorem....',
    image: 'potter.jpg',
    price: '9999',
    isAvailable: true
 }

 const batman = {
    name: 'batman',
    description: 'Hero description lorem....',
    image: 'batman.jpg',
    price: '9999',
    isAvailable: true
 }