import { changeNumberContent } from './changeNumberContent';

export const startCounterAnimation = (entries, observer) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const targetNumber = Number.parseInt(targetElement.dataset.number, 10);
      changeNumberContent(targetElement, targetNumber, 0);
      observer.unobserve(targetElement);
    }
  }
};
