export const addLanguageStyleListeners = (menuLanguage, navigationLanguage) => {
  menuLanguage.addEventListener('click', () => {
    menuLanguage.classList.toggle('menu__language--active')
  })

  navigationLanguage.addEventListener('click', () => {
    navigationLanguage.classList.toggle('navigation__language--active')
  })

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.navigation__language')) {
      navigationLanguage.classList.remove('navigation__language--active')
    }

    if (!event.target.closest('.menu__language')) {
      menuLanguage.classList.remove('menu__language--active')
    }
  })
}
