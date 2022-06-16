// The following can be changed to modify this countdown for anything // 

//Change the date you're wanting to countdown to//
const dueDate ='7 Oct 2022';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

function countdown(){
  const babyBday = new Date(dueDate);
  const currentDate = new Date();

  const totalSeconds = (babyBday -currentDate)/1000;
const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds/3600)%24;
  const min = Math.floor(totalSeconds/60)%60;
  const sec = Math.floor(totalSeconds)%60;
  
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(min);
  secEl.innerHTML = formatTime(sec);
}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);