export const toggleScroll = (config) => {
	if (config.scrollEnabled) {
		config.scrollTop = window.scrollY || document.documentElement.scrollTop;
		config.scrollLeft = window.scrollX || document.documentElement.scrollLeft;

		document.body.style.overflow = 'hidden';

		window.onscroll = function() {
				window.scrollTo(config.scrollLeft, config.scrollTop);
		};
	} else {
		document.body.style.overflow = 'auto';
		window.onscroll = null;
	}

	config.scrollEnabled = !config.scrollEnabled;
}