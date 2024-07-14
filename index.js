//CLICKS
let buttons = document.querySelectorAll(".drum");

for (button of buttons) {
  button.addEventListener("click", function () {
    let buttonText = this.textContent;
    makeSound(buttonText);
    animateButton(buttonText);
  });
}

//KEYBOARD PRESS
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  animateButton(event.key);
});

//FUNCTION FOR MAKE SOUNDS
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonText);
  }
}

//FUNCTION FOR ANIMATION
function animateButton(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);

  activeButton.classList.toggle("pressed");

  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);
}
