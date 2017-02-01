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

module.exports = {
  defineUrl,
  openMenu,
  closeMenu
}