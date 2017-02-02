function defineUrl(url) {
  if (window.location.hostname.indexOf('github') !== -1) {
    return 'public/' + url;
  }

  return '../' + url;
}

function openMenu() {
  document.getElementById("open-menu").classList.add('hidden')
  document.getElementById("close-menu").classList.remove('hidden')
  document.getElementById("menu").classList.add('show')
}

function closeMenu() {
  document.getElementById("open-menu").classList.remove('hidden')
  document.getElementById("close-menu").classList.add('hidden')
  document.getElementById("menu").classList.remove('show')
}

function animateOpacity() {
  let hiddenElements  = document.getElementsByClassName('opacity-animation')

  for(let i = 0; i < hiddenElements.length; i++) {
    let scrollPercentage = hiddenElements[i].y - (window.scrollY + window.innerHeight)

    if (scrollPercentage < -100) {
      hiddenElements[i].classList.remove('opacity-animation')
    }
  }
}

function opacityScrollAnimation() {
  window.addEventListener('scroll', (event) => {
    animateOpacity()
  })
}

module.exports = {
  defineUrl,
  openMenu,
  closeMenu,
  opacityScrollAnimation,
  animateOpacity
}