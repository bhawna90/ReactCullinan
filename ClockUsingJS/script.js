function displayTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  document.querySelector(".hours").innerText = hours + ":";
  document.querySelector(".minutes").innerText = minutes + ":";
  document.querySelector(".seconds").innerText = seconds;
}

setInterval(() => {
  displayTime();
}, 1000);
