const slideLength = document.querySelectorAll(
  ".card05 .swiper-slide"
).length;

const initSwiper = () => {
  const mySwiper = new Swiper(".card05 .swiper", {
    spaceBetween: 16,
    loop: true,
    loopedSlides: slideLength,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    grabCursor: true,
    breakpoints: {
      1025: {
        spaceBetween: 32,
      },
    },
    on: {
      touchEnd: (swiper) => {
        swiper.slideTo(swiper.activeIndex + 1);
      },
    },
    breakpoints: {
      // 画面幅が1025px以上の場合
      1025: {
        slidesPerView: 6,
      },
      // 画面幅が768px以上の場合
      768: {
        slidesPerView: 4,
      },
      // 画面幅が576px以上の場合
      576: {
        slidesPerView: 3,
      },
      // 画面幅が576px未満の場合
      0: {
        slidesPerView: 3,
      },
    },
  });
  
};

window.addEventListener("load", function () {
  initSwiper();
});