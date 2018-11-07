const setInsetDirection = function(direction, val) {
  if (direction === 'horizontal') {
    return 'inset(0px 0px 0px ' + val + 'px)'
  } else if (direction === 'vertical') {
    return 'inset(' + val + 'px 0px 0px 0px)'
  } else {
    throw new Error('Direction must be either horizontal or vertical')
  }
}

export default setInsetDirection
