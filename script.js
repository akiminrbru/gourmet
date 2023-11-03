document.addEventListener("DOMContentLoaded", () => {
    // Слайдер акции
    const swiperGoods1 = new Swiper('.swiperGoods1', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 18,
    
    
        navigation: {
            nextEl: '.swiper-goods-next1',
            prevEl: '.swiper-goods-prev1',
        },
        
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
              spaceBetween: 18
            },
            // when window width is >= 640px
            1375: {
              slidesPerView: 4,
              spaceBetween:18
            }
          }
    });

    const swiperGoodsPrev1 = document.getElementById("swiper-goods-next1");
    const swiperGoodsNext1 = document.getElementById("swiper-goods-prev1");

    if (swiperGoodsPrev1 && swiperGoodsNext1) {
        swiperGoodsPrev1.addEventListener("click", () => {
            swiperGoods1.slidePrev();
        });
        swiperGoodsNext1.addEventListener("click", () => {
            swiperGoods1.slideNext();
        });
    }

    // Слайдер Хиты
    const swiperGoods2 = new Swiper('.swiperGoods2', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 18,
        
        
        navigation: {
            nextEl: '.swiper-goods-next2',
            prevEl: '.swiper-goods-prev2',
        },
            
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 18
            },
            // when window width is >= 480px
            992: {
                slidesPerView: 3,
                spaceBetween: 18
            },
            // when window width is >= 640px
            1375: {
                slidesPerView: 4,
                spaceBetween:18
            }
        }
    });

    const swiperGoodsPrev2 = document.getElementById("swiper-goods-next2");
    const swiperGoodsNext2 = document.getElementById("swiper-goods-prev2");

        
    if (swiperGoodsPrev2 && swiperGoodsNext2) {
        swiperGoodsPrev2.addEventListener("click", () => {
            swiperGoods2.slidePrev();
        });
        swiperGoodsNext2.addEventListener("click", () => {
            swiperGoods2.slideNext();
        });
    }

    // Слайдер новинки
    const swiperGoods3 = new Swiper('.swiperGoods3', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 18,
    
    
        navigation: {
            nextEl: '.swiper-goods-next3',
            prevEl: '.swiper-goods-prev3',
        },
        
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
              spaceBetween: 18
            },
            // when window width is >= 640px
            1375: {
              slidesPerView: 4,
              spaceBetween:18
            }
          }
    });
    
    const swiperGoodsPrev3 = document.getElementById("swiper-goods-next3");
    const swiperGoodsNext3 = document.getElementById("swiper-goods-prev3");
    
    if (swiperGoodsPrev3 && swiperGoodsNext3) {
        swiperGoodsPrev3.addEventListener("click", () => {
            swiperGoods3.slidePrev();
        });
        swiperGoodsNext3.addEventListener("click", () => {
            swiperGoods3.slideNext();
        });
    }

    // Слайдер рекомендуем
    const swiperGoods4 = new Swiper('.swiperGoods4', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 18,
    
    
        navigation: {
            nextEl: '.swiper-goods-next4',
            prevEl: '.swiper-goods-prev4',
        },
        
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
              spaceBetween: 18
            },
            // when window width is >= 640px
            1375: {
              slidesPerView: 4,
              spaceBetween:18
            }
          }
    });

    const swiperGoodsPrev4 = document.getElementById("swiper-goods-next4");
    const swiperGoodsNext4 = document.getElementById("swiper-goods-prev4");

    if (swiperGoodsPrev4 && swiperGoodsNext4) {
        swiperGoodsPrev4.addEventListener("click", () => {
            swiperGoods4.slidePrev();
        });
        swiperGoodsNext4.addEventListener("click", () => {
            swiperGoods4.slideNext();
        });
    }


    // Слайдер Идеальные сочетания
    const swiperGoods5 = new Swiper('.swiperGoods5', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 18,
    
    
        navigation: {
            nextEl: '.swiper-goods-next5',
            prevEl: '.swiper-goods-prev5',
        },
        
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
              spaceBetween: 18
            },
            // when window width is >= 640px
            1375: {
              slidesPerView: 4,
              spaceBetween:18
            }
          }
    });

    const swiperGoodsPrev5 = document.getElementById("swiper-goods-next5");
    const swiperGoodsNext5 = document.getElementById("swiper-goods-prev5");

    if (swiperGoodsPrev5 && swiperGoodsNext5) {
        swiperGoodsPrev5.addEventListener("click", () => {
            swiperGoods5.slidePrev();
        });
        swiperGoodsNext5.addEventListener("click", () => {
            swiperGoods5.slideNext();
        });
    }

    // Слайдер Идеальные сочетания
    const swiperGoods6 = new Swiper('.swiperGoods6', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 18,
    
    
        navigation: {
            nextEl: '.swiper-goods-next6',
            prevEl: '.swiper-goods-prev6',
        },
        
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
              spaceBetween: 18
            },
            // when window width is >= 640px
            1375: {
              slidesPerView: 4,
              spaceBetween:18
            }
          }
    });

    const swiperGoodsPrev6 = document.getElementById("swiper-goods-next6");
    const swiperGoodsNext6 = document.getElementById("swiper-goods-prev6");

    if (swiperGoodsPrev6 && swiperGoodsNext6) {
        swiperGoodsPrev6.addEventListener("click", () => {
            swiperGoods6.slidePrev();
        });
        swiperGoodsNext6.addEventListener("click", () => {
            swiperGoods6.slideNext();
        });
    }

    // Главный баннер

    const mainSwiper = new Swiper(".mainSwiper", {
        loop: true,
        spaceBetween: 60,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true
      });
    const mainSwiper2 = new Swiper(".mainSwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        thumbs: {
          swiper: mainSwiper
        }
    });

    // Детальный баннер

    const detailSwiper = new Swiper(".detailSwiper", {
        direction: 'vertical',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true
      });

    const detailSwiper2 = new Swiper(".detailSwiper2", {
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination-detail',
            clickable: true,
        },
        thumbs: {
          swiper: detailSwiper
        }
    });

    const swiperDetailPrev = document.getElementById("swiper-detail-next");
    const swiperDetailNext = document.getElementById("swiper-detail-prev");

    if (swiperDetailPrev && swiperDetailNext) {
        swiperDetailPrev.addEventListener("click", () => {
            detailSwiper2.slidePrev();
        });
        swiperDetailNext.addEventListener("click", () => {
            detailSwiper2.slideNext();
        });
    }


    // Перемещение элемента в футере

    const place = document.querySelector('.footer__content');
    const enter = document.querySelector('.footer__links');
    const back = document.querySelector('.footer__btn');

    if (place) {
        window.addEventListener('resize', function(event) {
            if (event.target.innerWidth < 993) {
                place.prepend(enter);
            } else {
                back.after(enter);
            }
        }, true);

  
        if (window.innerWidth < 993) {
            place.prepend(enter);
        }
    }

    // Выпадашки в футере

    const elements = document.querySelectorAll('.footer__nav-toggle');
    
    if (elements) {
        elements.forEach(el => {
            el.addEventListener('click', (e) => {
                console.log(e.target)
                const elemBtn = e.target.lastElementChild;
                const elemUl = e.target.parentNode.lastElementChild;
                elemUl.classList.toggle('footer__nav-listOpen');
                elemBtn.classList.toggle('footer__nav-arrow-active')
            })
        })
    }

    // Выпадашки на детальной

    const toogleDescBtn = document.querySelectorAll('.detailMain__desc-panel');

    if (toogleDescBtn) {
        toogleDescBtn.forEach(elem => {
            elem.addEventListener('click', (e) => {
                const currentArrow = e.target.lastElementChild;
                const currentElem = e.target.parentNode.lastElementChild;
                currentElem.classList.toggle('detailMain__desc-content-active');
                currentArrow.classList.toggle('detailMain__desc-toggle-active');
            })
        })
    }

    // Выпадашки на детальной2 (допольнительные)

    const toogleAdditionBtn = document.querySelectorAll('.detailMain__addition-panel');


    if (toogleAdditionBtn) {
        toogleAdditionBtn.forEach(elem => {
            elem.addEventListener('click', (e) => {
                console.log(e.target.parentNode.lastElementChild)
                const currentArrow = e.target.lastElementChild;
                const currentElem = e.target.parentNode.lastElementChild.firstElementChild;
                currentElem.classList.toggle('detailMain__addition-listActive');
                currentArrow.classList.toggle('detailMain__addition-imgActive');
            })
        })
    }

    // Табы на детальной

    const tabLinks = document.querySelectorAll(".detailMain__addition-tablink");
    const tabContents = document.querySelectorAll(".detailMain__addition-tabcontent");

    tabLinks.forEach((tabLink) => {
        tabLink.addEventListener("click", function(e) {
        // Скрываем все контенты

        tabLinks.forEach((tabLink2) => {
            tabLink2.classList.remove('detailMain__addition-tablinkActive');
        })

        e.target.classList.add('detailMain__addition-tablinkActive');

        tabContents.forEach(function(content) {
            content.classList.remove('detailMain__addition-tabcontentActive');
        });

        // Находим соответствующий контент и показываем его
        const tabId = this.getAttribute("data-tab");
        document.getElementById(tabId).classList.toggle('detailMain__addition-tabcontentActive');
        });
    });

    // По умолчанию показать первую вкладку
    if (document.getElementById("tab1")) {
        document.getElementById("tab1").classList.add('detailMain__addition-tabcontentActive');
    }
    
    if ( document.querySelector('.detailMain__addition-tablink[data-tab="tab1"]')) {
        document.querySelector('.detailMain__addition-tablink[data-tab="tab1"]').classList.add('detailMain__addition-tablinkActive');
    }
    
    // Перемещение блока на детальной странцие

    const placeBlock = document.querySelector('.detailMain__left');
    const enterBlock = document.querySelector('.detailMain__content');
    const backBlock = document.querySelector('.detailMain__right');

    if (placeBlock) {
        window.addEventListener('resize', function(event) {
            if (event.target.innerWidth < 1101) {
                placeBlock.prepend(enterBlock);
            } else {
                backBlock.prepend(enterBlock);
            }
        }, true);

  
        if (window.innerWidth < 1101) {
            placeBlock.prepend(enterBlock);
        }
    }    

});