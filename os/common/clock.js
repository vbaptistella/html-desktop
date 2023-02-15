const currentDate = new Date();
const timeElement = document.querySelector('#clock .time');
const dateElement = document.querySelector('#clock .date');

setInterval(() => {
    var hours = String(currentDate.getHours()).padStart(2, '0');
    var minutes = String(currentDate.getMinutes()).padStart(2, '0');



    timeElement.innerText = hours + ':' + minutes;
}, 1000);