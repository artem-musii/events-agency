import { changeNumberContent } from "./changeNumberContent";

export const startCounterAnimation = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const targetNum = parseInt(targetElement.dataset.number, 10);
      changeNumberContent(targetElement, targetNum, 0);
      observer.unobserve(targetElement);
    }
  });
}
