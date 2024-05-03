import AOS from 'aos'
import 'aos/dist/aos.css'
import { languageConfig } from './lang/language.config.js'
import { handleLoaded } from './functions/handleLoaded.js'
import { startCounterAnimation } from './functions/startCounterAnimation.js'
import { observeNumberElements } from './functions/observeNumberElements.js'
import { addWindowScrollListener } from './functions/addWindowScrollListener.js'
import { addLanguageStyleListeners } from './functions/addLanguageStyleListeners.js'
import { addNavigationInteractionsListeners } from './functions/addNavigationInteractionsListeners.js'
import { DEFAULT_LANGUAGE } from './constants/index.js'
import { addLanguageItemsListeners } from './functions/addLanguageItemsListeners.js'
import { changeLanguage } from './functions/changeLanguage.js'

document.body.overflow = 'hidden'

window.addEventListener('load', handleLoaded())

AOS.init({
  offset: 40,
  delay: 0,
  duration: 300,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
})

const observer = new IntersectionObserver(startCounterAnimation, {
  root: undefined,
  threshold: 0.5,
})
const numberElements = document.querySelectorAll('.number-animate')

observeNumberElements(numberElements, observer)

const navigation = document.querySelector('.navigation')

addWindowScrollListener(navigation)

const menuLanguage = document.querySelector('.menu__language')
const navigationLanguage = document.querySelector('.navigation__language')

addLanguageStyleListeners(menuLanguage, navigationLanguage)

const burgerMenu = document.querySelector('.navigation__burger-menu')
const menu = document.querySelector('.menu')
const menuCloser = document.querySelector('.menu__closer')
const links = document.querySelectorAll('.menu__list-link')

addNavigationInteractionsListeners(links, menu, menuCloser, burgerMenu)

const defaultLanguage = localStorage.getItem('lang') || DEFAULT_LANGUAGE
const languageItems = document.querySelectorAll('.language-switcher__item')
let currentLanguageText = languageConfig[defaultLanguage]

changeLanguage(currentLanguageText)
addLanguageItemsListeners(languageItems, currentLanguageText, defaultLanguage)
