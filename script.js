document.addEventListener("DOMContentLoaded", () => {
    // Слайдер акции
    const swiperGoods1 = new Swiper('.zswiperGoods1', {
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
    const swiperGoods2 = new Swiper('.zswiperGoods2', {
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
    const swiperGoods3 = new Swiper('.zswiperGoods3', {
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
    const swiperGoods4 = new Swiper('.zswiperGoods4', {
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
    const swiperGoods5 = new Swiper('.zswiperGoods5', {
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
    const swiperGoods6 = new Swiper('.zswiperGoods6', {
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

    const mainSwiper = new Swiper(".zmainSwiper", {
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
    const mainSwiper2 = new Swiper(".zmainSwiper2", {
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
            el: '.zswiper-pagination-main',
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

    const detailSwiper = new Swiper(".zdetailSwiper", {
        direction: 'vertical',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true
      });

    const detailSwiper2 = new Swiper(".zdetailSwiper2", {
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.zswiper-pagination-detail',
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

    const place = document.querySelector('.zfooter__content');
    const enter = document.querySelector('.zfooter__links');
    const back = document.querySelector('.zfooter__btn');

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

    const elements = document.querySelectorAll('.zfooter__nav-toggle');
    
    if (elements) {
        elements.forEach(el => {
            el.addEventListener('click', (e) => {
                const elemBtn = e.target.lastElementChild;
                const elemUl = e.target.parentNode.lastElementChild;
                elemUl.classList.toggle('zfooter__nav-listOpen');
                elemBtn.classList.toggle('zfooter__nav-arrow-active')
            })
        })
    }

    // Выпадашки на детальной

    const toogleDescBtn = document.querySelectorAll('.zdetailMain__desc-panel');

    if (toogleDescBtn) {
        toogleDescBtn.forEach(elem => {
            elem.addEventListener('click', (e) => {
                const currentArrow = e.target.lastElementChild;
                const currentElem = e.target.parentNode.lastElementChild;
                currentElem.classList.toggle('zdetailMain__desc-content-active');
                currentArrow.classList.toggle('zdetailMain__desc-toggle-active');
            })
        })
    }

    // Выпадашки на детальной2 (допольнительные)

    const toogleAdditionBtn = document.querySelectorAll('.zdetailMain__addition-panel');


    if (toogleAdditionBtn) {
        toogleAdditionBtn.forEach(elem => {
            elem.addEventListener('click', (e) => {
                const currentArrow = e.target.lastElementChild;
                const currentElem = e.target.parentNode.lastElementChild.firstElementChild;
                currentElem.classList.toggle('zdetailMain__addition-listActive');
                currentArrow.classList.toggle('zdetailMain__addition-imgActive');
            })
        })
    }

    // Выпадашка для отзывов

    const toogleReviewBtn = document.querySelectorAll('.zdetailMain__addition-reveiewPanel');

    if (toogleReviewBtn) {
        toogleReviewBtn.forEach(elem => {
            elem.addEventListener('click', (e) => {
                const currentArrow = e.target.lastElementChild;
                const currentElem = e.target.parentNode.lastElementChild;
                currentElem.classList.toggle('zdetailMain__reveiew-wrapperActive');
                currentArrow.classList.toggle('zdetailMain__addition-imgActive');
            })
        })
    }
    

    // Табы на детальной

    const tabLinks = document.querySelectorAll(".zdetailMain__addition-tablink");
    const tabContents = document.querySelectorAll(".zdetailMain__addition-tabcontent");

    tabLinks.forEach((tabLink) => {
        tabLink.addEventListener("click", function(e) {
        // Скрываем все контенты

        tabLinks.forEach((tabLink2) => {
            tabLink2.classList.remove('zdetailMain__addition-tablinkActive');
        })

        e.target.classList.add('zdetailMain__addition-tablinkActive');

        tabContents.forEach(function(content) {
            content.classList.remove('zdetailMain__addition-tabcontentActive');
        });

        // Находим соответствующий контент и показываем его
        const tabId = this.getAttribute("data-tab");
        document.getElementById(tabId).classList.toggle('zdetailMain__addition-tabcontentActive');
        });
    });

        // По умолчанию показать первую вкладку
    if (document.getElementById("tab1")) {
        document.getElementById("tab1").classList.add('zdetailMain__addition-tabcontentActive');
    }
    
    if ( document.querySelector('.zdetailMain__addition-tablink[data-tab="tab1"]')) {
        document.querySelector('.zdetailMain__addition-tablink[data-tab="tab1"]').classList.add('zdetailMain__addition-tablinkActive');
    }
    
    // Перемещение блока на детальной странцие

    const placeBlock = document.querySelector('.zdetailMain__content');
    const enterBlock = document.querySelector('.zdetailMain__reviews');
    const backBlock = document.querySelector('.zdetailMain__content');

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

    const placeBlockBuy = document.querySelector('.zfooter');
    const enterBlockBuy = document.querySelector('.zdetailMain__buy');
    const backBlockBuy = document.querySelector('.zdetailMain__content');


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

    const buy_block = document.querySelector('.zdetailMain__buy');
    const footer_block = document.querySelector('.zfooter').offsetHeight;
    let distanctToFooter = document.body.scrollHeight - footer_block - window.innerHeight;

    if (buy_block) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > distanctToFooter) {
                buy_block.classList.remove('zdetailMain__buyFixed');
            } else {
                buy_block.classList.add('zdetailMain__buyFixed');
            }
        });
    }

    // Каталог
    
    const catalogBtn = document.querySelector('.zheader__catalogBtn');
    const catalog = document.querySelector('.zheader__catalog');
    const header__search = document.querySelector('.zheader__search');

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

    if (header__search) {
        header__search.addEventListener('mouseenter', () => {
            catalogBtn.classList.remove('active');
            catalog.classList.remove('active');
        });
    }

    const catalog_mouseleave = () => {
        catalogBtn.classList.remove('active');
        catalog.classList.remove('active');
    }


    window.addEventListener('resize', () => {
        if (window.innerWidth > 993) {
            if (catalog) {
                catalog.addEventListener('mouseleave', catalog_mouseleave);
            }
        } else {
            if (catalog) {
                catalog.removeEventListener('mouseleave', catalog_mouseleave);
            }
        }
    });
    
    if (window.innerWidth > 993) {
        if (catalog) {
            catalog.addEventListener('mouseleave', catalog_mouseleave);
        }
    } else {
        if (catalog) {
            catalog.removeEventListener('mouseleave', catalog_mouseleave);
        }
    }

    // Скоролл

    const header__nav = document.querySelector('.zheader__nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            header__nav.classList.add('disable');
        } else {
            header__nav.classList.remove('disable');
        }
    });

    // Звездочки на товаре

    const all_stars = document.querySelectorAll('.zgoods__stars');

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
    
    const goods__newPrice = document.querySelector('.zgoods__newPrice');
    const goods__oldPrice = document.querySelector('.zgoods__oldPriceValue');

    
    if (goods__newPrice && goods__newPrice.innerHTML) {
        goods__newPrice.innerHTML = Number(goods__newPrice.innerHTML.replaceAll(' ', '')).toLocaleString("ru-RU");
    }

    if (goods__oldPrice && goods__oldPrice.innerHTML) {
        goods__oldPrice.innerHTML = Number(goods__oldPrice.innerHTML.replaceAll(' ', '')).toLocaleString("ru-RU");
    }

    // Каталог открытие фильтров

    const catalog_filter_btn = document.querySelectorAll('.zcatalog__filter-panel');

    if (catalog_filter_btn.length != 0) {
        let arr = Array.from(catalog_filter_btn);

        arr.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let arrow = e.target.lastElementChild;
                let inner = e.target.parentNode.lastElementChild;
                arrow.classList.toggle('active');
                inner.classList.toggle('active');
                // console.log(e.target.parentNode.lastElementChild)
            });
        })
    }

    // Прокрутка тегов

    const catalog__tags = document.querySelector('.zcatalog__tags-content');
    const tags__left = document.querySelector('.zcatalog__tags-left');
    const tags__right = document.querySelector('.zcatalog__tags-right');

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

    const filter_btn = document.querySelector('.zcatalog__filter-btn');
    const filter_wrapper = document.querySelector('.zcatalog__filter-wrapper');
    const filter_close = document.querySelector('.zcatalog__filter-close');
    const body_block = document.querySelector('body');
    const filter_back = document.querySelector('.zcatalog__filter-blackout');
    const filter__apply = document.querySelector('.zcatalog__filter-apply');
    const filter__reset = document.querySelector('.zcatalog__filter-reset');

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

    const droplist_btn = document.querySelector('.zcatalog__droplist');
    const catalog__dropdown = document.querySelector('.zcatalog__dropdown');

    if (droplist_btn) {
        droplist_btn.addEventListener('click', () => {
            catalog__dropdown.classList.toggle('active');
            droplist_btn.classList.toggle('active');
        });
    }

    const dropdown_items = document.querySelectorAll('.zcatalog__dropdown-item');
    const dropdown_item_current = document.querySelector('.zcatalog__droplist-current');

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

    const goods__btn = document.querySelectorAll('.zgoods__btn');
    const goods__quantity = document.querySelector('.zgoods__quantity');

    if (goods__btn.length != 0) {
        goods__btn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let quantity = e.target.parentNode.querySelector('.zgoods__quantity');
                quantity.classList.add('active');
                e.target.classList.add('disable');
            });
        })
    }

    // Табы в каталоге

    const tabCatLinks = document.querySelectorAll(".zheader__catalogNav-tablink");
    const tabCatContents = document.querySelectorAll(".zheader__catalogContent");

    window.addEventListener('resize', () => {
        if (window.innerWidth > 993) {
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

            // По умолчанию показать первую вкладку
            if (document.getElementById("tabCat1")) {
                document.getElementById("tabCat1").classList.add('active');
            }
            if (document.querySelector('.zheader__catalogNav-tablink[data-cat-tab="tabCat1"]')) {
                document.querySelector('.zheader__catalogNav-tablink[data-cat-tab="tabCat1"]').classList.add('active');
            }
        } else {
            tabCatLinks.forEach((tabLink) => {
                tabLink.addEventListener("click", function(e) {
            
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

            if (document.getElementById("tabCat1")) {
                document.getElementById("tabCat1").classList.remove('active');
            }
            if (document.querySelector('.zheader__catalogNav-tablink[data-cat-tab="tabCat1"]')) {
                document.querySelector('.zheader__catalogNav-tablink[data-cat-tab="tabCat1"]').classList.remove('active');
            }
        }
    });

    if (window.innerWidth > 993) {
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

        // По умолчанию показать первую вкладку
        if (document.getElementById("tabCat1")) {
            document.getElementById("tabCat1").classList.add('active');
        }
        if (document.querySelector('.zheader__catalogNav-tablink[data-cat-tab="tabCat1"]')) {
            document.querySelector('.zheader__catalogNav-tablink[data-cat-tab="tabCat1"]').classList.add('active');
        }
    } else {
        tabCatLinks.forEach((tabLink) => {              
            tabLink.addEventListener("click", function(e) {
        
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
    }

    // Бургер меню

    const burger_btn = document.querySelector('.zheader__burger-btn');
    const burger_btn_close = document.querySelector('.zheader__burger-btnClose');
    const catalog_mobile = document.querySelector('.zheader__catalog');
    const catalogContent_back = document.querySelectorAll('.zheader__catalogContent-back');

    const burger_click = () => {
        burger_btn.classList.toggle('active');
        catalog_mobile.classList.toggle('active');
        body_block.classList.toggle('active');

        catalogContent_back.forEach(el => {
            el.parentNode.classList.remove('active');
        })
    }

    if (burger_btn) {
        burger_btn.addEventListener('click', burger_click);
    }

    if (catalogContent_back.length != 0) {
        catalogContent_back.forEach(back => {
            back.addEventListener('click', (e) => {
                let content_catalog = e.target.parentNode;
                content_catalog.classList.remove('active');
            });
        });
    }

    // Табы в мобильном меню

    // Табы на детальной

    const tabSubLinks = document.querySelectorAll(".zheader__catalogSubNav-tablink");
    const tabSubContents = document.querySelectorAll(".zheader__catalogSubContent");

    // console.log(tabSubLinks);

    if (tabSubLinks) {
        tabSubLinks.forEach((tabLink) => {
            tabLink.addEventListener("click", function(e) {
            // Скрываем все контенты
    
            tabSubLinks.forEach((tabLink2) => {
                tabLink2.classList.remove('active');
            })
    
            e.target.classList.add('active');
    
            tabSubContents.forEach(function(content) {
                content.classList.remove('active');
            });
    
            // Находим соответствующий контент и показываем его
            const tabId = this.getAttribute("data-sub-tab");
            document.getElementById(tabId).classList.toggle('active');
            });
        });
    }
});