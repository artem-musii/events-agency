import { changeNumberContent } from "./changeNumberContent";
import { checkIsElementVisible } from "./chekcIsElementVisible";

export const observeNumberElements = (numberElements, observer) => {
	numberElements.forEach(numberElement => {
		if (checkIsElementVisible(numberElement)) {
			const targetNum = parseInt(numberElement.dataset.number, 10);
			changeNumberContent(numberElement, targetNum, 0);
		} else {
			observer.observe(numberElement);
		}
	});
}