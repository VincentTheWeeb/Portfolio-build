// Navigation
/* This function slides the navigation links in and out. I started by creating a function with 2 variables that locates the hamburger and nav classes. I then  placed an event listener on the hamburger class to toggle the class name of .nav-links to .nav-active. */

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const $ = document.querySelector;
  const navActive = document.querySelector('.nav-active'); // this is an UL

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.getElementsByClassName.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.05s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      console.log('I work!!');
    });
  });
};

navSlide();
