import { COUNT_CHANGE_SPEED } from '../constants';

export function changeNumberContent(numberElement, to, from = 0) {
  for (let index = from; index <= to; index++) {
    setTimeout(
      () => {
        numberElement.textContent = index;
      },
      (COUNT_CHANGE_SPEED / to) * index,
    );
  }
}
