'use strict'
// Compare Apples To Oranges

import setInsetDirection from './util/setInsetDirection.js'
import { addClass } from './util/domClasses.js'
import { setStyles } from './util/setStyles.js'
import './cato.css'

export default class Cato {
  constructor(options, el) {
    this.options = {
      direction: options.direction || 'horizontal',
      width: options.width || '100%',
      height: options.height || '100%',
      initial: options.initial || 30,
      filter: {
        active: options.filter.active || false,
        effect: options.filter.effect || null,
      },
    }
    this.slider = el
  }

  initHTML() {
    const container = this.slider
    this.imgToSlide = container.children[0]
    this.imgBase = container.children[1]
    this.range = document.createElement('input')
    this.range.type = 'range'

    this.slider.append(this.range)
  }

  initStyles() {
    const container = this.slider
    const imgToSlide = this.imgToSlide
    const imgBase = this.imgBase

    const range = this.range

    // INITIAL STYLINGS
    addClass(container, 'cato')
    addClass(range, 'cato--inner')
    setStyles(container, {
      height: this.options.height + 'px',
      maxWidth: this.options.width + 'px',
    })

    setStyles(range, {
      top: imgBase.getBoundingClientRect().height / 2 + 'px',
      width: imgBase.width + 'px',
    })

    range.value = this.options.initial

    // initial overlap
    const initialClip =
      this.options.direction === 'horizontal'
        ? (imgBase.width * this.options.initial) / 100
        : (imgBase.height * this.options.initial) / 100
    imgBase.style.clipPath = setInsetDirection(
      this.options.direction,
      initialClip,
    )

    // flip input range and adjust to the side if vertical
    if (this.options.direction === 'vertical') {
      setStyles(range, {
        transform: 'rotate(90deg)',
        transformOrigin: 'left', // use left edge for transformation instead of center
        width: imgBase.getBoundingClientRect().height + 'px', // set width to height, because the indicator is rotated for 90°
        left: imgBase.width / 2 + 'px', // center it horizontally
        top: 0,
        marginTop: '-2px',
      })
    }

    // Applying Filters if any
    if (this.options.filter.active) {
      imgToSlide.style.filter = this.options.filter.effect
    }
  }

  registerEvents() {
    this.range.addEventListener('input', () => this.handleSlides())

    window.addEventListener('resize', () => this.resizeIndicator())
    return false
  }

  resizeIndicator() {
    if (this.options.direction === 'vertical') {
      setStyles(this.range, {
        width: this.imgBase.getBoundingClientRect().height + 'px', // set width to height, because the indicator is rotated for 90°
        left: this.imgBase.width / 2 + 'px', // center it horizontally
      })
    } else {
      setStyles(this.range, {
        width: this.imgBase.getBoundingClientRect().width + 'px',
        top: this.imgBase.getBoundingClientRect().height / 2 + 'px',
      })
    }
    return false
  }

  handleSlides() {
    const width = this.imgBase.width
    const height = this.imgBase.getBoundingClientRect().height
    const slidedWith =
      this.options.direction === 'horizontal'
        ? (width * this.range.value) / 100
        : (height * this.range.value) / 100

    this.imgBase.style.clipPath = setInsetDirection(
      this.options.direction,
      slidedWith,
    )
    this.resizeIndicator()
    return false
  }

  createSlider() {
    this.initHTML()
    this.initStyles()
    this.registerEvents()
    return false
  }
}
