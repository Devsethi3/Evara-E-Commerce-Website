// ================================ SHOW NAVBAR ================================ //
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// ================================ SWIPER CATEGORIES ================================ //
let swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

// ================================ SWIPER PRODUCTS ================================ //

let swiperProducts = new Swiper(".new-container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// ================================ PRODUCTS TAB ================================ //

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
  });
});

// ================================ IMAGE GALLERY ================================ //
function imgGallery() {
  const mainImg = document.querySelector(".detials-img"),
    smallImg = document.querySelectorAll(".detials-small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}
imgGallery();

// ================================ DETAILS TAB ================================ //
const detialTabs = document.querySelectorAll("[data-target]");
const detialContents = document.querySelectorAll("[content]");

detialTabs.forEach((detailTab) => {
  detailTab.addEventListener("click", () => {
    const target = document.querySelector(detailTab.dataset.target);
    detialContents.forEach((detialContent) => {
      detialContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    detialTabs.forEach((detailTab) => {
      detailTab.classList.remove("active-tab");
    });
    detailTab.classList.add("active-tab");
  });
});