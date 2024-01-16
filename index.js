const sunAndMoon = document.querySelectorAll('.sunAndMoon');
const css = document.getElementById('theme');
const nav_toggle = document.querySelector('.nav_toggle');
const mobile_nav_toggle = document.querySelector('.mobile_nav_toggle');
const mobile_nav = document.querySelector('.mobile_nav');
var mobile_nav_shown = false;

const switchMode = (e) => {
 let theme = localStorage.getItem('currentTheme');
 
 if(e !== undefined) {
  theme = theme === 'dark' ? 'light' : 'dark';
 }

 if(theme === null || theme === 'dark') {
  css.href = './styles/dark_mode.css';
  localStorage.setItem('currentTheme', 'dark');
 }
 else if(theme === 'light') {
  css.href = './styles/light_mode.css';
  localStorage.setItem('currentTheme', 'light');
 }
}

let setYear = () => {
 const year = document.querySelector('.year');
 year.textContent = new Date().getFullYear();
}

let mobileNavDisplay = () => {
 if(!mobile_nav_shown) {
  nav_toggle.classList.add('hide');
  mobile_nav.classList.remove('hide');
 }
 else {
  nav_toggle.classList.remove('hide');
  mobile_nav.classList.add('hide');
 }
 mobile_nav_shown=!mobile_nav_shown;
}

setYear();
sunAndMoon.forEach(e => e.addEventListener('click', switchMode)); 
switchMode();

nav_toggle.addEventListener('click', mobileNavDisplay);
mobile_nav_toggle.addEventListener('click', mobileNavDisplay);