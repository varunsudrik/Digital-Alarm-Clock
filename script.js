function clock() {
  var ampm;
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let period = document.querySelector(".zone");

  let min = new Date().getMinutes();
  let h = new Date().getHours();

  ampm = h >= 12 ? "PM" : "AM";

  h = h < 10 ? "0" + h : h;
  min = min < 10 ? "0" + min : min;

  h = h > 12 ? h - 12 : h;
  period.textContent = ampm;
  hour.textContent = h;
  minute.textContent = min;
}
setInterval(clock, 1000);

let selectMenue = document.querySelectorAll("select");
for (let i = 12; i > 0; i--) {
  if (i < 10) {
    i = "0" + i;
  }
  let option = `<option value="${i}">${i}</option>`;
  selectMenue[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 60; i > 0; i--) {
  if (i < 10) {
    i = "0" + i;
  }
  let option = `<option value="${i}">${i}</option>`;
  selectMenue[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${i}">${i}</option>`;
  selectMenue[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
