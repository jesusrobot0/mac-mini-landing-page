const $menuButton = document.getElementById('menu-button')
const $mainHeader = document.getElementById('main-header')
const $overlay = document.getElementById('main-overlay')

const activeClass = 'is-active'

const toggleMenu = () => $mainHeader.classList.toggle(activeClass)
const closeMenu = () => $mainHeader.classList.remove(activeClass)
const closeMenuWhenClickLink = (event) => event.target.tagName === 'A' && closeMenu()
const closeWhenTypeEscape = (event) => event.code === 'Escape' && closeMenu()


$menuButton.addEventListener('click', toggleMenu)
$overlay.addEventListener('click', closeMenu)
$mainHeader.addEventListener('click', closeMenuWhenClickLink)
$mainHeader.addEventListener('keydown', closeWhenTypeEscape)
