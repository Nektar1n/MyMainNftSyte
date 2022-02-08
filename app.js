"use strict"

const isMobile = {
    Android: () => {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: () => {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: () => {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: () => {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: () => {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: () => {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch')

    let menuArrows=document.querySelectorAll('.menu__arrow')
    if (menuArrows.length>0){
        for (let i=0;i<menuArrows.length;i++){
            const menuArrow=menuArrows[i]
            menuArrow.addEventListener('click',function (e) {
                menuArrow.parentElement.classList.toggle('_active')
            })
        }
    }
}else {
    document.body.classList.add('_pc')
}

const menuLinks=document.querySelectorAll('.menu__link[data-goto]')
const menuBody=document.querySelector('.menu__body')
//меню бургер
const iconMenu=document.querySelector('.menu__icon')
if (iconMenu){
    iconMenu.addEventListener('click',function (e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}
//прокрутка при клике
if (menuLinks.length>0){
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener('click',onMenuLinkClick)
    })
    function onMenuLinkClick(e){
        const menuLink=e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
           const gotoBlock=document.querySelector(menuLink.dataset.goto)
           const gotoBlockValue=gotoBlock.getBoundingClientRect().top+pageYOffset-document.querySelector('header').offsetHeight

            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active')
                menuBody.classList.remove('_active')
            }

            window.scrollTo({
                top:gotoBlockValue,
                behavior:'smooth'
            });
           e.preventDefault();
        }
    }
}
// console.log('h')






//СЛАЙДЕР
// import Swiper JS


new Swiper('.image-slider',{
    //arrow
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'},
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        // dynamicBullets:true
    },
    // scrollbar:{
    //     el: '.swiper-scrollbar',
    // draggable:true},
    grabCursor:true,
    keyboard:{
        enabled:true,
        onlyInViewport:true,
        pageUpDown:true
    },
    autoHeight:true,//автовысота
    slidesPerView:1.5,//количество слайдов для показа
    watchOverflow:true,//если слайдов меньше чем нужно то слайдер отключится
    spaceBetween:30,
    centeredSlides:true,//отцентровать слайд
    initialSlide:0, //стартовый слайд
    loop:true,
    autoplay:{
        delay:3000,
        //остановить на последнем слайде
        stopOnLastSlide:true,
        //Отключить после ручного прокручивания
        disableOnInteraction:false
    },
    speed:800,
    // effect:'cube',
    // cubeEffect:{
    //     slideShadows:true,
    //     shadow:true,
    //     shadowOffset:20,
    //     shadowScale:0.94,
    // }
    effect:'coverflow',
    coverflowEffect:{
        //угол наклона
        rotate:20,
        //наложение
        stretch:50,
        //тень
        slideShadows:true
    },
    breakpoints:{
        320:{
            slidesPerView: 1
        },
        480:{
            slidesPerView:1.1
        },
        992:{
            slidesPerView:1.5
        }
    }

});

new Swiper('.cards-slider',{
    navigation:{
        nextEl:'.card-btn-next',
        prevEl:'.card-btn-prev'},
    // pagination:{
    //     el:'.swiper-pagination',
    //     clickable:true,
        // dynamicBullets:true
    // },
    // scrollbar:{
    //     el: '.swiper-scrollbar',
    // draggable:true},
    grabCursor:true,
    // keyboard:{
    //     enabled:true,
    //     onlyInViewport:true,
    //     pageUpDown:true
    // },
    // autoHeight:true,//автовысота
    slidesPerView:3,//количество слайдов для показа
    watchOverflow:true,//если слайдов меньше чем нужно то слайдер отключится
    spaceBetween:40,
    centeredSlides:true,//отцентровать слайд
    initialSlide:2, //стартовый слайд
    speed:300,
    loop:true,
    breakpoints:{
        320:{
            slidesPerView: 1
        },
        480:{
            slidesPerView:1
        },
        620:{
            slidesPerView:2
        },
        992:{
            slidesPerView:3
        }
    },
    slidesPerGroup:1


})






