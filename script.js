// The following can be changed to modify this countdown for anything // 
// please add # of leap years in your lifetime for the most accurate results 
//Change the date you're wanting to countdown to//
const birthDate ='01 Oct 2022';

const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

function countdown(){
  const babyBday = new Date(birthDate);
  const currentDate = new Date();
  //This will store the year for the calculations of leap year  
  const currentYear = new Date().getFullYear();
  //change to the total number of leap years in your lifetime (https://www.calendar.best/leap-years.html) Omit any red years
  const leapYearCount = 0;

  const totalSeconds = (babyBday - currentDate)/1000;

  const years = Math.floor(-1*(totalSeconds/31536034.56));
  const months = Math.floor(-1*(totalSeconds/2628002.88)%12);
  const days = Math.floor(-1*(totalSeconds/86400)%30);
  const hours = Math.floor(-1*(totalSeconds/3600)%24);
  const min = Math.floor(-1*(totalSeconds/60)%60);
  const sec = Math.floor(-1*(totalSeconds)%60);
 
  yearsEl.innerHTML= years;
  monthsEl.innerHTML= months;
  daysEl.innerHTML = days + leapYearCount;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = min;
  secEl.innerHTML = sec;

  // leap years happen every 4 years. this will start for carl in 2024 (Will check 1-1-24 to see if the day counter has moved up 1, im not too worried about the count being wrong for 2 months). Leap years are not % by 100 but are divisable by 400;  
  if((currentYear % 4 == 0 && currentYear % 100 != 0) || currentYear % 400 == 0) {
    leapYearCount++;
  }
}


countdown();

setInterval(countdown,1000);
