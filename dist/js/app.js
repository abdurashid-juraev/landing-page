function hover(a) {
  a.classList.add("text-gradient");
}

function normal(a) {
  a.classList.remove("text-gradient");
}

$(window).on("load", function () {
  AOS.init({ disable: "mobile" });
  // AOS.refresh();
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    340: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tham = document.querySelector(".tham");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  nav.classList.toggle("open");
  body.classList.toggle("fixed-body");
});

$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    direction: "vertical",
    verticalCentered: true,
    css3: true,
    keyboardScrolling: true,
    easing: "swing",
    navigation: {
      textColor: "#000",
      bulletsColor: "#000",
      position: "center",
      sectionSelector: ".section",
    },
  });
});
