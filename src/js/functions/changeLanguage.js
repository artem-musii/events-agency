export function changeLanguage(currentLanguageText) {
  for (const selector of Object.keys(currentLanguageText)) {
    const elements = document.querySelectorAll(selector);
    const text = currentLanguageText[selector];

    if (elements.length > 1) {
      for (const [index, element] of elements.entries()) {
        element.textContent = text[index];
      }
    } else {
      elements[0].textContent = text;
    }
  }
}
