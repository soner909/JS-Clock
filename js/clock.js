const myName = document.querySelector('#myName');
myName.innerHTML = prompt("Isminiz");

function showtime (){
    var date = new Date();
    var days = new Array("Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi");
    let dayName = date.getDate();
    let hours = zero(date.getHours());
    let minutes = zero(date.getMinutes());
    let seconds = zero(date.getSeconds());
    function zero(startNumber) {
        if (startNumber < 10) {
          return "0" + startNumber
        } else {
          return startNumber
        }
      }

let myClock = document.querySelector('#myClock');
myClock.innerHTML = `${hours}:${minutes}:${seconds} ${days[dayName]}`;
}
setInterval(showtime,1000);