import { toggleScroll } from './toggleScroll'

const config = {
  scrollEnabled: true,
}

export const addNavigationInteractionsListeners = (
  links,
  menu,
  menuCloser,
  burgerMenu,
) => {
  for (const link of links) {
    link.addEventListener('click', () => {
      menu.classList.toggle('menu--active')
      toggleScroll.call(undefined, config)
    })
  }

  burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--active')
    toggleScroll.call(undefined, config)
  })

  menuCloser.addEventListener('click', () => {
    menu.classList.toggle('menu--active')
    toggleScroll.call(undefined, config)
  })
}
