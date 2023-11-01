const swiperGoods = new Swiper('.swiperGoods', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 18,


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
});