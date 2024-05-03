import { toggleScroll } from "./toggleScroll";

const config = {
	scrollEnabled: true,
	scrollTop: 0,
	scrollLeft: 0,
}

export const addNavigationInteractionsListeners = (links, menu, menuCloser, burgerMenu) => {
	links.forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.toggle('menu--active');
			toggleScroll(config);
		});
	});
	
	burgerMenu.addEventListener('click', () => {
		menu.classList.toggle('menu--active');
		toggleScroll(config);
	});
	
	menuCloser.addEventListener('click', () => {
		menu.classList.toggle('menu--active');
		toggleScroll(config);
	});
}