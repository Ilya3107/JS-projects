//for circle
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

//for table
const seconds_table = document.querySelector(".seconds");
const minuts_table = document.querySelector(".mins");
const hours_table = document.querySelector(".hour");

function setData() {
  const now = new Date();

  //seconds hand
  const seconds = now.getSeconds();
  console.log(seconds);
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  seconds_table.textContent = seconds;

  // minuts hand
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  minuts_table.textContent = mins;

  //hours hand
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
  hours_table.textContent = hour;
}
setInterval(setData, 1000);
