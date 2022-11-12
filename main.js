// put the future date
let temptime = new Date();
let tempfullYear = temptime.getFullYear();
let tempMonth = temptime.getMonth()
let tempdate = temptime.getDate();
// *************************************************
// *************************************************
let futuretime = new Date(tempfullYear, tempMonth, tempdate + 10, 11, 30, 5)
let year = futuretime.getFullYear();
let month = futuretime.getMonth();
let day = futuretime.getDate()
let futureml = futuretime.getTime()

function counter() {
  let temptime = new Date();
  let tempml = temptime.getTime()
  let t = futureml - tempml;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  document.querySelector(".days h4").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours h4").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes h4").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds h4").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (t < 0) {
    clearInterval(counter);
  }
}
counter();
setInterval(counter, 1000);
// *****************************************************************************
// *****************************************************************************
// start progress bar
let section = document.querySelector('.skills')
let spans = document.querySelectorAll(".skills span")
// *****************************************************************************
let container=document.querySelector(".stats")
let nums=document.querySelectorAll(".stats .box p")
let started=false;
window.onscroll=function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width=span.dataset.width;
    });
  }

  if (window.scrollY >= container.offsetTop - 200) {
    if (!started) {
      nums.forEach((num)=>{
        speedUp(num)})
    }
    started=true;
  }
}

// *****************************************************************************
// *****************************************************************************
// start count up


function speedUp(el) {
  let aim=el.dataset.content;
  let count=setInterval(function() {
    el.textContent++;
    if (el.textContent == aim) {
      clearInterval(count)
    }
  }, 2000 / aim);
}





















// window.onscroll = function() {
  //   if (window.scrollY >= section.offsetTop - 200) {
    //     spans.forEach((span) => {
      //       span.style.width = span.dataset.width
      //     });
      //
      //   }
      // }
