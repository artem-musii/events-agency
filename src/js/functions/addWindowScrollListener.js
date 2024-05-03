export const addWindowScrollListener = (navigation) => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navigation.classList.add('navigation--scrolled')
    } else {
      navigation.classList.remove('navigation--scrolled')
    }
  })
}
