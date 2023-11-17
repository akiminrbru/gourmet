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
            320: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 18
            },
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
        watchSlidesProgress: true,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1375: {
              slidesPerView: 5,
              spaceBetween:60
            }
        }
      });
    const mainSwiper2 = new Swiper(".mainSwiper2", {
        loop: true,
        spaceBetween: 10,
        autoplay: {
            delay: 4870,
        },
        navigation: {
          nextEl: ".swiper-main-next",
          prevEl: ".swiper-main-prev"
        },
        pagination: {
            el: '.swiper-pagination-main',
            clickable: true,
        },
        thumbs: {
          swiper: mainSwiper
        } 
    });

    const swiperMainPrev = document.getElementById("swiper-main-next");
    const swiperMainNext = document.getElementById("swiper-main-prev");

    if (swiperMainPrev && swiperMainNext) {
        swiperMainPrev.addEventListener("click", () => {
            mainSwiper2.slidePrev();
        });
        swiperMainNext.addEventListener("click", () => {
            mainSwiper2.slideNext();
        });
    }

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
                const currentArrow = e.target.lastElementChild;
                const currentElem = e.target.parentNode.lastElementChild.firstElementChild;
                currentElem.classList.toggle('detailMain__addition-listActive');
                currentArrow.classList.toggle('detailMain__addition-imgActive');
            })
        })
    }

    // Выпадашка для отзывов

    const toogleReviewBtn = document.querySelectorAll('.detailMain__addition-reveiewPanel');

    if (toogleReviewBtn) {
        toogleReviewBtn.forEach(elem => {
            elem.addEventListener('click', (e) => {
                const currentArrow = e.target.lastElementChild;
                const currentElem = e.target.parentNode.lastElementChild;
                currentElem.classList.toggle('detailMain__reveiew-wrapperActive');
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

    const placeBlock = document.querySelector('.detailMain__content');
    const enterBlock = document.querySelector('.detailMain__reviews');
    const backBlock = document.querySelector('.detailMain__content');

    if (placeBlock) {
        window.addEventListener('resize', function(event) {
            if (event.target.innerWidth < 1101) {
                placeBlock.prepend(enterBlock);
            } else {
                backBlock.append(enterBlock);
            }
        }, true);

  
        if (window.innerWidth < 1101) {
            placeBlock.prepend(enterBlock);
        }
    }    

    // Перемещение блока (покупка) на детальной странцие

    const placeBlockBuy = document.querySelector('.footer');
    const enterBlockBuy = document.querySelector('.detailMain__buy');
    const backBlockBuy = document.querySelector('.detailMain__content');


    if (enterBlockBuy) {
        window.addEventListener('resize', function(event) {
            if (event.target.innerWidth < 577) {
                placeBlockBuy.before(enterBlockBuy);
            } else {
                backBlockBuy.after(enterBlockBuy);
            }
        }, true);

  
        if (window.innerWidth < 577) {
            placeBlockBuy.before(enterBlockBuy);
        }
    }    

    // Блок покупки снизу экрана

    const buy_block = document.querySelector('.detailMain__buy');
    const footer_block = document.querySelector('.footer').offsetHeight;
    let distanctToFooter = document.body.scrollHeight - footer_block - window.innerHeight;

    if (buy_block) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > distanctToFooter) {
                buy_block.classList.remove('detailMain__buyFixed');
            } else {
                buy_block.classList.add('detailMain__buyFixed');
            }
        });
    }

    // Каталог
    
    const catalogBtn = document.querySelector('.header__catalogBtn');
    const catalog = document.querySelector('.header__catalog');
    const header__search = document.querySelector('.header__search');

    if (catalogBtn) {
        catalogBtn.addEventListener('mouseenter', () => {
            catalogBtn.classList.add('active');
            catalog.classList.add('active');
        });

        catalogBtn.addEventListener('click', () => {
            catalogBtn.classList.toggle('active');
            catalog.classList.toggle('active');
        });
    }

    if (catalog) {
        catalog.addEventListener('mouseleave', () => {
            catalogBtn.classList.remove('active');
            catalog.classList.remove('active');
        });
    }

    if (header__search) {
        header__search.addEventListener('mouseenter', () => {
            catalogBtn.classList.remove('active');
            catalog.classList.remove('active');
        });
    }
    
    // Скоролл

    const header__nav = document.querySelector('.header__nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            header__nav.classList.add('disable');
        } else {
            header__nav.classList.remove('disable');
        }
    });

    // Звездочки на товаре

    const all_stars = document.querySelectorAll('.goods__stars');

    if (window.innerWidth < 577 ) {
        if (all_stars) {
            all_stars.forEach(el => {
                let stars = Array.from(el.children);
                for (let i = 1; i < stars.length; i++) {
                    stars[i].remove();
                }
           });
        }
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 577 ) {
            if (all_stars) {
                all_stars.forEach(el => {
                    let stars = Array.from(el.children);
                    for (let i = 1; i < stars.length; i++) {
                        stars[i].remove();
                    }
               });
            }
        }
    })

    // Форматирование цены
    
    const goods__newPrice = document.querySelector('.goods__newPrice');
    const goods__oldPrice = document.querySelector('.goods__oldPriceValue');

    
    if (goods__newPrice && goods__newPrice.innerHTML) {
        goods__newPrice.innerHTML = Number(goods__newPrice.innerHTML.replaceAll(' ', '')).toLocaleString("ru-RU");
    }

    if (goods__oldPrice && goods__oldPrice.innerHTML) {
        goods__oldPrice.innerHTML = Number(goods__oldPrice.innerHTML.replaceAll(' ', '')).toLocaleString("ru-RU");
    }

    // Каталог открытие фильтров

    const catalog_filter_btn = document.querySelectorAll('.catalog__filter-panel');

    if (catalog_filter_btn.length != 0) {
        let arr = Array.from(catalog_filter_btn);

        arr.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let arrow = e.target.lastElementChild;
                let inner = e.target.parentNode.lastElementChild;
                arrow.classList.toggle('active');
                inner.classList.toggle('active');
                console.log(e.target.parentNode.lastElementChild)
            });
        })
    }

    // Прокрутка тегов

    const catalog__tags = document.querySelector('.catalog__tags-content');
    const tags__left = document.querySelector('.catalog__tags-left');
    const tags__right = document.querySelector('.catalog__tags-right');

    // console.log(tags__left)
    // console.log(tags__right)
    
    // catalog__tags.scroll(100)
    if (tags__left) {
        tags__left.addEventListener('click', () => {
            catalog__tags.scrollBy({
                left: -150,
                behavior: "smooth",
            });
        })
    }

    if (tags__right) {
        tags__right.addEventListener('click', () => {
            catalog__tags.scrollBy({
                left: 150,
                behavior: "smooth",
            });
        })
    }

    // Открытие фильтра 

    const filter_btn = document.querySelector('.catalog__filter-btn');
    const filter_wrapper = document.querySelector('.catalog__filter-wrapper');
    const filter_close = document.querySelector('.catalog__filter-close');
    const body_block = document.querySelector('body');
    const filter_back = document.querySelector('.catalog__filter-blackout');
    const filter__apply = document.querySelector('.catalog__filter-apply');
    const filter__reset = document.querySelector('.catalog__filter-reset');

    if (filter_btn) {
        filter_btn.addEventListener('click', () => {
            filter_wrapper.classList.add('active');
            body_block.classList.add('active');
            filter_back.classList.add('active');
        });
    }

    if (filter_close) {
        filter_close.addEventListener('click', () => {
            filter_wrapper.classList.remove('active');
            body_block.classList.remove('active');
            filter_back.classList.remove('active');
        });
    }

    if (filter__apply) {
        filter__apply.addEventListener('click', () => {
            filter_wrapper.classList.remove('active');
            body_block.classList.remove('active');
            filter_back.classList.remove('active');
        });
    }
    
    if (filter__reset) {
        filter__reset.addEventListener('click', () => {
            filter_wrapper.classList.remove('active');
            body_block.classList.remove('active');
            filter_back.classList.remove('active');
        });
    }

    // Выпадающий список в каталоге

    const droplist_btn = document.querySelector('.catalog__droplist');
    const catalog__dropdown = document.querySelector('.catalog__dropdown');

    if (droplist_btn) {
        droplist_btn.addEventListener('click', () => {
            catalog__dropdown.classList.toggle('active');
            droplist_btn.classList.toggle('active');
        });
    }

    const dropdown_items = document.querySelectorAll('.catalog__dropdown-item');
    const dropdown_item_current = document.querySelector('.catalog__droplist-current');

    if (dropdown_items != 0) {
        dropdown_items.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let elem = e.target.firstElementChild;
                elem.before(dropdown_item_current.firstElementChild);
                dropdown_item_current.append(elem);
            });
        })
    }

    // Кнопка добавить в корзину

    const goods__btn = document.querySelectorAll('.goods__btn');
    const goods__quantity = document.querySelector('.goods__quantity');

    if (goods__btn.length != 0) {
        goods__btn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let quantity = e.target.parentNode.querySelector('.goods__quantity');
                quantity.classList.add('active');
                e.target.classList.add('disable');
            });
        })
    }

    // Табы в каталоге

    const tabCatLinks = document.querySelectorAll(".header__catalogNav-tablink");
    const tabCatContents = document.querySelectorAll(".header__catalogContent");
 
    tabCatLinks.forEach((tabLink) => {
    tabLink.addEventListener("mouseover", function(e) {

        // Скрываем все контенты
        tabCatLinks.forEach((tabLink2) => {
            tabLink2.classList.remove('active');
        })
        e.target.classList.add('active');
    
        tabCatContents.forEach((content) => {
            content.classList.remove('active');
        });
        // Находим соответствующий контент и показываем его
        const tabId = this.getAttribute("data-cat-tab");
            document.getElementById(tabId).classList.toggle('active');
        });
    });

    // window.addEventListener('resize', () => {
    //     if (window.innerWidth > 993) {
    //         // По умолчанию показать первую вкладку
    //         if (document.getElementById("tabCat1")) {
    //             document.getElementById("tabCat1").classList.add('active');
    //         }
    //         if (document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]')) {
    //             document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]').classList.add('active');
    //         }
    //     } else {
    //         if (document.getElementById("tabCat1")) {
    //             document.getElementById("tabCat1").classList.remove('active');
    //         }
    //         if (document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]')) {
    //             document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]').classList.remove('active');
    //         }
    //     }
    // });

    // if (window.innerWidth > 993) {
    //     // По умолчанию показать первую вкладку
    //     if (document.getElementById("tabCat1")) {
    //         document.getElementById("tabCat1").classList.add('active');
    //     }
    //     if (document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]')) {
    //         document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]').classList.add('active');
    //     }
    // } else {
    //     if (document.getElementById("tabCat1")) {
    //         document.getElementById("tabCat1").classList.remove('active');
    //     }
    //     if (document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]')) {
    //         document.querySelector('.header__catalogNav-tablink[data-cat-tab="tabCat1"]').classList.remove('active');
    //     }
    // }

    // Бургер меню

    const burger_btn = document.querySelector('.header__burger-btn');
    const catalog_mobile = document.querySelector('.header__catalog');
    const catalogContent_back = document.querySelectorAll('.header__catalogContent-back');


    if (burger_btn) {
        burger_btn.addEventListener('click', () => {
            burger_btn.classList.toggle('active');
            catalog_mobile.classList.toggle('active');
            body_block.classList.toggle('active');
        });
    }

    if (catalogContent_back.length != 0) {
        catalogContent_back.forEach(back => {
            console.log(back.parentNode)
            back.addEventListener('click', (e) => {
                let content_catalog = e.target.parentNode;
                content_catalog.classList.remove('active');
            });
        });
    }

});