function defineUrl(url) {
  if (window.location.hostname.indexOf('github') !== -1) {
    return 'public/' + url;
  }

  return '../' + url;
}

module.exports = {
  defineUrl
}