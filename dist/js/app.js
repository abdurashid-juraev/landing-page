function hover(a) {
  a.classList.add("text-gradient");
}

function normal(a) {
  a.classList.remove("text-gradient");
}

//====================================================
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    320: {
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

//====================================================

const tham = document.querySelector(".tham");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  nav.classList.toggle("open");
  body.classList.toggle("fixed-body");
});

//====================================================

window.addEventListener("load", myAos);

function myAos() {
  AOS.init();
  AOS.refresh();
}

//====================================================

const h1 = document.querySelector("h1");
const text = "Tajribani tajribalilardan oling!";

function textEffect(el, text, i = 0) {
  el.textContent += text[i];

  if (i === text.length - 1) {
    setTimeout(() => {
      el.textContent = "";
      textEffect(el, text);
    }, 2000);
    return;
  }
  setTimeout(() => textEffect(el, text, i + 1), 200);
}
textEffect(h1, text);
