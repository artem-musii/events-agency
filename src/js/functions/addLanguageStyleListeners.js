export const addLanguageStyleListeners = (menuLanguage, navigationLanguage) => {
	menuLanguage.addEventListener('click', () => {
		menuLanguage.classList.toggle('menu__language--active');
	});

	navigationLanguage.addEventListener('click', () => {
		navigationLanguage.classList.toggle('navigation__language--active');
	});

	window.addEventListener('click', (e) => {
		if (!e.target.closest('.navigation__language')) {
			navigationLanguage.classList.remove('navigation__language--active');
		}
	
		if (!e.target.closest('.menu__language')) {
			menuLanguage.classList.remove('menu__language--active');
		}
	});
};