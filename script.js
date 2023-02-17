function clock(){
    var ampm;
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let period = document.querySelector(".zone")

    let min = new Date().getMinutes();
    let h = new Date().getHours();

    ampm = (h >= 12) ? "PM" : "AM"
    



    h = (h < 10) ? "0" + h : h
    min = (min < 10) ? "0" + min : min
    console.log(h);
    console.log(min);


    h = (h > 12) ? h - 12 : h
    period.textContent = ampm
    hour.textContent = h
    minute.textContent = min


}
setInterval(clock,1000)