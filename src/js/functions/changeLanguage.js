export function changeLanguage(currentLanguageText) {
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