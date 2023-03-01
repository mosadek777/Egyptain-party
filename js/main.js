$(document).ready(function () {
  $("#loading .sk-folding-cube").fadeOut(1000,function () { 
    $("#loading").fadeOut(1000,()=>{
      $("#loading").remove()
      $("body").css("overflow-y", "auto")
    })
   })
});




let sliderDownOffset = $("#sliderDown").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  if (wScroll > sliderDownOffset - 50) {
    $("#btnUp").fadeIn(500);
  } else {
    $("#btnUp").fadeOut(500);
  }
});

$("#btnUp").click(function () {
  $("html, body").animate({ scrollTop: 0, transition: "0.5s" }, 500);
});


$(".closeBtn").click(function () {
  $(`.sideMenu`).animate({ width: `0px` }, 50);
  $(".openNav").animate({ left: "0px", transition: "0.5s" }, 50);
  $(".home-content").animate({ marginLeft: "0px", transition: "1s" }, 50);
});


$("a[href^='#']").click(function (e) {
  let linkHref = $(e.target).attr("href");
  let sectionOffset = $(linkHref).offset().top
  $("html, body").animate({ scrollTop: sectionOffset, transition: "0.4s" }, 200);
});

$(`.openNav`).click(function () {
  $(".openNav").animate({ left: "250px", transition: "0.5s" }, 50);
  $(`.sideMenu`).animate({ width: `250px`, transition: "0.5s" }, 50);

  $(".home-content").animate({ marginLeft: "250px", transition: "0.6s" }, 50);
});

// $(`#sliderDown .toggle`).click(function () {
//   $(this).siblings(".innerSlide").slideUp(1000);
//   $(this).next().slideDown(1000);

// });

$(`#sliderDown .toggle`).click(function (e) {
  $(`.innerSlide`).not($(this).next()).slideUp(500);
  $(this).next().slideToggle(1000);
});

// * third section countDown
let countDownDate = new Date("Apr 15, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let timeDeference = countDownDate - dateNow;
  let days = Math.floor(timeDeference / (1000 * 60 * 60 * 24));
  document.querySelector(`.days`).innerHTML =
    days < 10 ? `0${days}` : days + " days";

  let hours = Math.floor(
    (timeDeference % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60
  );
  document.querySelector(`.hours`).innerHTML =
    hours < 10 ? `0${hours}` : hours + " hours";

  let minutes = Math.floor((timeDeference % (1000 * 60 * 60)) / 1000 / 60);
  document.querySelector(`.minutes`).innerHTML =
    minutes < 10 ? `0${minutes}` : minutes + " minutes";

  let seconds = Math.floor((timeDeference % (1000 * 60)) / 1000);
  document.querySelector(`.seconds`).innerHTML =
    seconds < 10 ? `0${seconds}` : seconds + " seconds";

  if (timeDeference < 0) {
    clearInterval(counter);
    ("event is coming now");
  }
}, 1000);

let counterCharacters = document.querySelector(`#counterCharacters`);
let progress = document.querySelector(`.progress`);
let textarea = document.querySelector("textarea");

let maxLength = textarea.getAttribute("maxlength");

counterCharacters.innerHTML = maxLength;

textarea.oninput = function () {
  counterCharacters.innerHTML = maxLength - this.value.length;
  counterCharacters.innerHTML == 0
    ? counterCharacters.classList.add("fa-fade")
    : counterCharacters.classList.remove("fa-fade");

  // set the progress ==> معادلة النسبة المئوية
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};
