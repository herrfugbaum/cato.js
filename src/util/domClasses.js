'use strict'

const addClass = function(el, className) {
  // see youmightnotneedjquery.com
  if (el.classList) {
    el.classList.add(className)
  } else {
    el.className += ' ' + className
  }
}

export { addClass }
