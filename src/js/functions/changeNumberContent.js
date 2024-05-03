import { COUNT_CHANGE_SPEED } from "../constants";

export function changeNumberContent(numberElement, to, from = 0) {
  for (let i = from; i <= to; i++) {
		setTimeout(() => {
			numberElement.textContent = i;
		}, COUNT_CHANGE_SPEED / to * i);
	}
}