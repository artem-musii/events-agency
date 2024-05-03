
import AOS from 'aos';
import 'aos/dist/aos.css';
import { languageConfig } from './lang/language.config.js';
AOS.init({
  offset: 180,
  delay: 0,
  duration: 300,
  easing: 'ease',
  once: false,
  mirror: true,
  anchorPlacement: 'top-bottom',

});

const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		navigation.classList.add('navigation--scrolled');
	}
	else {
		navigation.classList.remove('navigation--scrolled');
	}
});

const burgerMenu = document.querySelector('.navigation__burger-menu');
const menu = document.querySelector('.menu');
const menuCloser = document.querySelector('.menu__closer');
const links = document.querySelectorAll('.menu__list-link');

const navigationLanguage = document.querySelector('.navigation__language');

navigationLanguage.addEventListener('click', () => {
	navigationLanguage.classList.toggle('navigation__language--active');
});

const menuLanguage = document.querySelector('.menu__language');

menuLanguage.addEventListener('click', () => {
	menuLanguage.classList.toggle('menu__language--active');
});

window.addEventListener('click', (e) => {
	if (!e.target.closest('.navigation__language')) {
		navigationLanguage.classList.remove('navigation__language--active');
	}

	if (!e.target.closest('.menu__language')) {
		menuLanguage.classList.remove('menu__language--active');
	}
});

const defaultLanguage = localStorage.getItem('lang') || 'en';

let currentLanguageText = languageConfig[defaultLanguage];

function changeLanguage() {
	Object.keys(currentLanguageText).forEach(selector => {
		const elements = document.querySelectorAll(selector);
		const text = currentLanguageText[selector];

		if (elements.length > 1) {
			elements.forEach((element, index) => {
				element.textContent = text[index];
			});
		} else {
			elements[0].textContent = text;
		}
	});
}

changeLanguage();

links.forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.toggle('menu--active');
		toggleScroll();
	});
});

burgerMenu.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
	toggleScroll();
});

menuCloser.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
	toggleScroll();
});

let scrollEnabled = true;
let scrollTop = 0;
let scrollLeft = 0;

const languageItems = document.querySelectorAll('.language-switcher__item');

languageItems.forEach(item => {
	const language = item.dataset.lang;

	item.addEventListener('click', (e) => {
		e.preventDefault();
		languageItems.forEach(langItem => {
			if (langItem !== item) {
				langItem.classList.remove('language-switcher__item--active');
			}
		}
		);
		item.classList.add('language-switcher__item--active');

		localStorage.setItem('lang', language);
		currentLanguageText = languageConfig[language];
		document.body.focus();

		changeLanguage();
	});

	if (defaultLanguage !== language) {
		item.classList.remove('language-switcher__item--active');
	} else {
		item.classList.add('language-switcher__item--active');
	}
} );

function toggleScroll() {
	if (scrollEnabled) {
		scrollTop = window.scrollY || document.documentElement.scrollTop;
		scrollLeft = window.scrollX || document.documentElement.scrollLeft;

		document.body.style.overflow = 'hidden';

		window.onscroll = function() {
				window.scrollTo(scrollLeft, scrollTop);
		};
	} else {
		document.body.style.overflow = 'auto';
		window.onscroll = null;
	}

	scrollEnabled = !scrollEnabled;
}
