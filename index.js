const sunAndMoon = document.querySelector('.sunAndMoon');
const body = document.getElementsByTagName('body')[0];
let isLight = true;

const git_icon = document.querySelector('.github_logo');
const linkedin_logo = document.querySelector('.linkedin');
git_icon.setAttribute('src', "./images/github-mark.svg");
linkedin_logo.setAttribute('src', "./images/linkedin.svg");

const switchMode = (event) => {
 body.classList.toggle('dark_mode');
 
 sunAndMoon.children[0].remove();

 
 if(isLight) {
  let sun = document.createElement('img');
  sun.className='sun';
  sun.setAttribute('src', './images/sun-warm-icon.svg');
  sunAndMoon.appendChild(sun);
  isLight=false;
  git_icon.setAttribute('src', "./images/github-mark-white.svg");
  linkedin_logo.setAttribute('src', "./images/white-linkedin.svg");
 }
 else {
  let moon = document.createElement('img');
  moon.setAttribute('src', './images/moon-icon.svg');
  sunAndMoon.appendChild(moon);
  isLight=true;
  git_icon.setAttribute('src', "./images/github-mark.svg");
  linkedin_logo.setAttribute('src', "./images/linkedin.svg");
 }
}

let setYear = () => {
 const year = document.querySelector('.year');
 year.textContent = new Date().getFullYear();
}

setYear();
sunAndMoon.addEventListener('click', switchMode);