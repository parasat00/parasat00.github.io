const slider = document.querySelector('#projects .container .slider');
const project_container = document.querySelector('#projects .container .project_container');
var project_count = parseInt(slider.getAttribute('data-project-count'));

const left_button = document.querySelector('#projects .slider_button.left');
const right_button = document.querySelector('#projects .slider_button.right');

let current_project=1;
let to_slide=0;

const checkLeftButton = () => {
 if(current_project <= 1) {
  left_button.classList.add('disable');
  left_button.removeEventListener('click', moveSliderLeft);
  return false;
 }
 else if(current_project > 1) {
  left_button.classList.remove('disable');
  left_button.addEventListener('click', moveSliderLeft);
  return true;
 }
}

const checkRightButton = () => {
 if(current_project >= project_count) {
  right_button.classList.add('disable');
  right_button.removeEventListener('click', moveSliderRight);
  return false;
 }
 else if(current_project < project_count) {
  right_button.classList.remove('disable');
  right_button.addEventListener('click', moveSliderRight);
  return true;
 }
}

const moveSliderLeft = () => {
 current_project -= 1;
 to_slide += 100;
 slider.style.transform=`translateX(${to_slide}vw)`;
 
 checkLeftButton();
 checkRightButton();
}

const moveSliderRight = () => {
 current_project += 1;
 to_slide -= 100;
 slider.style.transform=`translateX(${to_slide}vw)`;

 checkLeftButton();
 checkRightButton();
}

left_button.addEventListener('click', moveSliderLeft);
right_button.addEventListener('click', moveSliderRight);

checkLeftButton();