// console.log("Hello world");
window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return; //stop function
  }
  audio.currentTime = 0; //rewind audio
  audio.play();
  key.classList.add("playing");

  function removeTransion(e) {
    if (e.propertyName !== "transform") return; //skip it if it is not a transform
    this.classList.remove("playing");
    // console.log(e.propertyName);
  }

  const keys = this.document.querySelectorAll(".key");
  keys.forEach((key) => key.addEventListener("transitionend", removeTransion));

  // console.log(key);
});
