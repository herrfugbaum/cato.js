'use strict'
// Compare Apples To Oranges

import setInsetDirection from './util/setInsetDirection.js'
import { addClass, removeClass } from './util/domClasses.js'
import { normalizeRightsideOffset } from './util/normalizeRightsideOffset.js'
import { setStyles } from './util/setStyles.js'
import './cato.css'

export default class Cato {
  constructor(options, el) {
    this.options = {
      tooltips: options.tooltips || false,
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
    this.output = document.createElement('output')
    this.outputTriangle = document.createElement('span')
    this.range.type = 'range'

    this.slider.append(this.range, this.output, this.outputTriangle)
  }

  initStyles() {
    const container = this.slider
    const imgToSlide = this.imgToSlide
    const imgBase = this.imgBase

    const range = this.range
    const output = this.output
    const outputTriangle = this.outputTriangle

    // INITIAL STYLINGS
    addClass(container, 'cato')
    addClass(range, 'cato--inner')
    addClass(output, 'indicator_bubble')
    addClass(outputTriangle, 'indicator_triangle')
    container.style.height = this.options.height + 50 + 'px'
    setStyles(imgBase, {
      width: this.options.width + 'px',
      height: this.options.height + 'px',
    })
    setStyles(imgToSlide, {
      width: this.options.width + 'px',
      height: this.options.height + 'px',
    })
    setStyles(range, {
      top: imgBase.getBoundingClientRect().height / 2 + 'px',
      width: imgBase.width + 'px',
    })

    output.style.top = imgBase.getBoundingClientRect().height - 40 + 'px'
    outputTriangle.style.top =
      imgBase.getBoundingClientRect().height - 15 + 'px'
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
        transformOrigin: 'left',
        width: imgBase.getBoundingClientRect().height + 'px',
        left: imgBase.width / 2 + 'px',
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

    if (this.options.tooltips) {
      this.range.addEventListener('focus', () => {
        handleFocus(this)
      })

      this.range.addEventListener('blur', () => {
        handleBlur(this)
      })
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
      self.output.style.left = slidedWith + 'px'
      self.outputTriangle.style.left = slidedWith + 'px'

      if (self.options.direction === 'vertical') {
        setStyles(self.output, {
          left: normalizeRightsideOffset(self.imgBase, self.range) - 45 + 'px',
          top: slidedWith - 10 + 'px',
        })
        setStyles(self.outputTriangle, {
          left: normalizeRightsideOffset(self.imgBase, self.range) - 22 + 'px',
          top: slidedWith + 'px',
          transform: 'rotate(-90deg)',
        })
      }

      self.output.setAttribute('data-range', self.range.value.toString(10))
    }

    const handleFocus = function(self) {
      addClass(self.output, 'active')
      addClass(self.outputTriangle, 'active')
    }

    const handleBlur = function(self) {
      removeClass(self.output, 'active')
      removeClass(self.outputTriangle, 'active')
    }
  }

  createSlider() {
    this.initHTML()
    this.initStyles()
    this.registerEvents()
    return false
  }
}
