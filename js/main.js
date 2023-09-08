"use strict"

// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };

// if (isMobile.any()) {
// 	document.body.classList.add('_touch');

// 	let menuArrows = document.querySelectorAll('.menu__arrow');
// 	if (menuArrows.length > 0) {
// 		for (let index = 0; index < menuArrows.length; index++) {
// 			const menuArrow = menuArrows[index];
// 			menuArrow.addEventListener("click", function (e) {
// 				menuArrow.parentElement.classList.toggle('_active');
// 			});
// 		}
// 	}

// } else {
// 	document.body.classList.add('_pc');
// }

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}


// Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }

// ==============================================================
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  //loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  // speed: 500,
  // effect: 'slider', // cards, coverflow, flip, fade, cube
  // initialSlide: 1, // Начинаем со 2 слайдера
  // freeMode: true, // Можно перетаскивать как ленту
  slidesPerView: 3, // кол-во активных слайдов 1 || 2 || 3 || 1.5 || "auto"
  centeredSlider: true, // центрирование слайдер
  spaceBetween: 24, // расстояние между слайдами
  // slidesPerGroup: 3, // кол-во пролистываемых слайдов

  // пагинация в виде точек
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true, // true - пагинация становится кликабельной
  // },

  // кнопки вперед и назад
  navigation: {
    prevEl: '.swipper__prev',
    nextEl: '.swipper__next',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // Автовоспроизведение
  // autoplay: {
  //   delay: 1000,
  // },

  // адаптив
  breakpoints: {
    1251: { //проблемы с кнопкой next
      spaceBetween: 20,
      slidesPerView: 3,
    },

    951: {
      spaceBetween: 20,
      slidesPerView: 2,
    },

    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    //============ нужно прописывать в медиа в css //============//
    // @media (max-width: 1250px) {
    //   .swiper, swiper-wrapper {
    //     max-width: 780px;
    //   }
    // }

    // @media (max-width: 950px) {
    //   .swiper, swiper-wrapper {
    //     max-width: 320px;
    //   }
    // }
  },
});

const swiperPrev = document.querySelector('.swiperPrev');
const swiperNext = document.querySelector('.swiperNext');

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
})
