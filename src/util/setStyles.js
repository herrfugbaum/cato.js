const setStyles = (el, styles) => {
  Object.assign(el.style, styles)
}

const setVendor = (el, property, value) => {
	el.style['Webkit' + property] = value;
	el.style['Moz' + property] = value;
	el.style['ms' + property] = value;
	el.style['o' + property] = value;
	el.style.property = value;
}

export { setStyles, setVendor }
