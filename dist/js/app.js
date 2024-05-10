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

function autoType(element, text, speed) {
  let i = 0;
  const interval = setInterval(function () {
    if (i <= text.length) {
      element.textContent = text.substring(0, i++);
    } else {
      clearInterval(interval);
      autoRemove(element, speed);
    }
  }, speed);
}

function autoRemove(element, speed) {
  let text = element.textContent;
  let i = text.length;
  const interval = setInterval(function () {
    if (i >= 0) {
      element.textContent = text.substring(0, i--);
    } else {
      clearInterval(interval);

      autoType(element, text, speed);
    }
  }, speed);
}

const targetElement = document.querySelector("h1");
const textToType = "Tajribani tajribalilardan oling!";
const typingSpeed = 100;

autoType(targetElement, textToType, typingSpeed);
