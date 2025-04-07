document.addEventListener('DOMContentLoaded', () => {
  const menuToggleOpen = document.querySelector(
    ".menu-toggle[aria-label='Abrir Menu']"
  )
  const menuToggleClose = document.querySelector(
    ".menu-toggle[aria-label='Fechar Menu']"
  )
  const navMenu = document.querySelector('.header-nav-menu')

  menuToggleClose.style.display = 'none'

  const toggleMenu = (show) => {
    navMenu.classList.toggle('show-menu', show)
    menuToggleOpen.style.display = show ? 'none' : 'block'
    menuToggleClose.style.display = show ? 'block' : 'none'
  }

  menuToggleOpen.addEventListener('click', () => toggleMenu(true))
  menuToggleClose.addEventListener('click', () => toggleMenu(false))
})
