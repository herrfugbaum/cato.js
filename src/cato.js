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
      width: options.width || 700,
      height: options.height || 450,
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
    this.range.addEventListener('input', () => {
      handleSlides(this)
    })

    window.onresize = () => {
      if (this.options.direction === 'vertical') {
        setStyles(this.range, {
          width: this.imgBase.getBoundingClientRect().height + 'px', // set width to height, because the indicator is rotated for 90°
          left: imgBase.width / 2 + 'px', // center it horizontally
        })
      } else {
        setStyles(this.range, {
          width: this.imgBase.getBoundingClientRect().width + 'px',
          top: this.imgBase.getBoundingClientRect().height / 2 + 'px',
        })
      }
    }

    // Event handlers
    const handleSlides = function(self) {
      const width = self.imgBase.width
      const height = self.imgBase.getBoundingClientRect().height
      const slidedWith =
        self.options.direction === 'horizontal'
          ? (width * self.range.value) / 100
          : (height * self.range.value) / 100

      self.imgBase.style.clipPath = setInsetDirection(
        self.options.direction,
        slidedWith,
      )

      if (self.options.direction === 'vertical') {
        setStyles(self.range, {
          width: self.imgBase.getBoundingClientRect().height + 'px', // set width to height, because the indicator is rotated for 90°
          left: imgBase.width / 2 + 'px', // center it horizontally
        })
      } else {
        setStyles(self.range, {
          width: self.imgBase.getBoundingClientRect().width + 'px',
          top: imgBase.getBoundingClientRect().height / 2 + 'px',
        })
      }
    }
  }

  createSlider() {
    this.initHTML()
    this.initStyles()
    this.registerEvents()
    return false
  }
}
