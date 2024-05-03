import { languageConfig } from "../lang/language.config";
import { changeLanguage } from "./changeLanguage";

export const addLanguageItemsListeners = (languageItems, currentLanguageText, defaultLanguage) => {
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
	
			changeLanguage(currentLanguageText);
		});
	
		if (defaultLanguage !== language) {
			item.classList.remove('language-switcher__item--active');
		} else {
			item.classList.add('language-switcher__item--active');
		}
	} );
}