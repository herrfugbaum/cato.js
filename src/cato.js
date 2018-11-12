'use strict'
// Compare Apples To Oranges

import setInsetDirection from './util/setInsetDirection.js'
import { addClass, removeClass } from './util/domClasses.js'
import { normalizeRightsideOffset } from './util/normalizeRightsideOffset.js'
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

  createSlider() {
    const container = this.slider
    const containerInner = container.children
    const imgToSlide = containerInner[0]
    const imgBase = containerInner[1]

    const range = document.createElement('input')
    const output = document.createElement('output')
    const outputTriangle = document.createElement('span')

    range.type = 'range'
    this.slider.append(range, output, outputTriangle)

    // INITIAL STYLINGS
    addClass(container, 'cato')
    addClass(range, 'cato--inner')
    addClass(range, 'rangeindicator')
    addClass(output, 'indicator_bubble')
    addClass(outputTriangle, 'indicator_triangle')
    container.style.height = this.options.height + 50 + 'px'
    imgBase.style.width = this.options.width + 'px'
    imgBase.style.height = this.options.height + 'px'
    imgToSlide.style.width = this.options.width + 'px'
    imgToSlide.style.height = this.options.height + 'px'
    range.style.top = imgBase.getBoundingClientRect().height + 'px'
    range.style.width = imgBase.width + 'px'
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
      range.style.transform = 'rotate(90deg)'
      range.style.width = imgBase.getBoundingClientRect().height + 'px'
      range.style.left = normalizeRightsideOffset(imgBase, range) + 7 + 'px'
      range.style.top = imgBase.getBoundingClientRect().height / 2 + 'px'
      range.style.margin = '-1px 3px 1px'
    }

    // Applying Filters if any
    if (this.options.filter.active) {
      imgToSlide.style.filter = this.options.filter.effect
    }

    // EVENT REGISTRATIONS

    range.addEventListener('input', () => {
      console.log(this)
      handleSlides(this)
    })

    if (this.options.tooltips) {
      range.addEventListener('focus', function() {
        handleFocus()
      })

      range.addEventListener('blur', function() {
        handleBlur()
      })
    }

    // EVENT HANDLERS

    const handleSlides = function(self) {
      const width = imgBase.width
      const height = imgBase.getBoundingClientRect().height
      const slidedWith =
        self.options.direction === 'horizontal'
          ? (width * range.value) / 100
          : (height * range.value) / 100

      imgBase.style.clipPath = setInsetDirection(
        self.options.direction,
        slidedWith,
      )
      output.style.left = slidedWith + 'px'
      outputTriangle.style.left = slidedWith + 'px'

      if (self.options.direction === 'vertical') {
        output.style.left = normalizeRightsideOffset(imgBase, range) - 45 + 'px'
        outputTriangle.style.left =
          normalizeRightsideOffset(imgBase, range) - 22 + 'px'
        output.style.top = slidedWith - 10 + 'px'
        outputTriangle.style.top = slidedWith + 'px'
        outputTriangle.style.transform = 'rotate(-90deg)'
      }

      output.setAttribute('data-range', range.value.toString(10))
    }

    const handleFocus = function() {
      addClass(output, 'active')
      addClass(outputTriangle, 'active')
    }

    const handleBlur = function() {
      removeClass(output, 'active')
      removeClass(outputTriangle, 'active')
    }
  }
}
