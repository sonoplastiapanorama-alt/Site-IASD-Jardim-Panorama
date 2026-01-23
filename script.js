/*carrossel-topo*/
var swiperTopo = new Swiper(".swiper-topo", {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

/*carrossel-anuncios*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Suaviza rolagem do mouse
document.documentElement.style.scrollBehavior = "smooth";
