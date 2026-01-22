var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000, // tempo em ms (5 segundos)
        disableOnInteraction: false, // continua mesmo se clicar
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