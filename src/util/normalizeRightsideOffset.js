const normalizeRightsideOffset = function(el1, el2) {
  return el1.getBoundingClientRect().right - el2.getBoundingClientRect().left
}

export { normalizeRightsideOffset }
