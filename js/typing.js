const text = document.querySelector("#home .info .typing");
var words = ["Linux", "Devops", "Web Developer", "Django.py", "HTML,CSS&JS"];
var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;

const typeEffect = () => {
 currentWord = words[wordIndex];
 currentText = currentWord.substring(0, charIndex);
 text.textContent = currentText;

 if(!isDeleting && charIndex < currentWord.length){
  charIndex++;
  setTimeout(typeEffect, 200);
 }
 else if(isDeleting && charIndex > 0) {
  charIndex--;
  setTimeout(typeEffect, 100);
 }
 else {
  isDeleting = !isDeleting;
  wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
  setTimeout(typeEffect, 1200);
 }
}
typeEffect();