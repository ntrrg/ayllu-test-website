// Navbar togglers

document.addEventListener('DOMContentLoaded', () => {
  const togglers = document.querySelectorAll('.navbar-burger')

  for (const toggler of togglers) {
    toggler.addEventListener('click', () => {
      const target = document.getElementById(toggler.dataset.target)
      toggler.classList.toggle('is-active')
      target.classList.toggle('is-active')
    })
  }
})

// Images lazy loading

window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img.lazy-load')

  for (const img of images) {
    img.src = img.dataset.src 
  }
})
