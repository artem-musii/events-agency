import { changeNumberContent } from './changeNumberContent';
import { checkIsElementVisible } from './chekcIsElementVisible';

export const observeNumberElements = (numberElements, observer) => {
  for (const numberElement of numberElements) {
    if (checkIsElementVisible(numberElement)) {
      const targetNumber = Number.parseInt(numberElement.dataset.number, 10);
      changeNumberContent(numberElement, targetNumber, 0);
    } else {
      observer.observe(numberElement);
    }
  }
};
