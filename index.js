const sunAndMoon = document.querySelector('.sunAndMoon');
const css = document.getElementById('theme');

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

setYear();
sunAndMoon.addEventListener('click', switchMode);
switchMode();