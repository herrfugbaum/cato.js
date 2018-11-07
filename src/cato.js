'use strict'
// Compare Apples To Oranges

import setInsetDirection from './util/setInsetDirection.js'
import { addClass, removeClass } from './util/domClasses.js'

export default class Cato {
  constructor(options) {
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
  }

  createSlider(el) {
    const container = el
    const containerInner = container.children
    const imgToSlide = containerInner[0]
    const imgBase = containerInner[1]
    const range = containerInner[2]
    const output = containerInner[3]
    const outputTriangle = containerInner[4]
    const self = this

    // INITIAL STYLINGS
    addClass(container, 'comparison')
    addClass(range, 'cato_inner')
    addClass(range, 'rangeindicator')
    addClass(output, 'indicator_bubble')
    addClass(outputTriangle, 'indicator_triangle')
    container.style.height = self.options.height + 50 + 'px'
    imgBase.style.width = self.options.width + 'px'
    imgBase.style.height = self.options.height + 'px'
    imgToSlide.style.width = self.options.width + 'px'
    imgToSlide.style.height = self.options.height + 'px'
    range.style.top = imgBase.getBoundingClientRect().height + 'px'
    range.style.width = imgBase.width + 'px'
    output.style.top = imgBase.getBoundingClientRect().height - 40 + 'px'
    outputTriangle.style.top =
      imgBase.getBoundingClientRect().height - 15 + 'px'
    range.value = self.options.initial

    // initial overlap

    const initialClip =
      self.options.direction === 'horizontal'
        ? (imgBase.width * self.options.initial) / 100
        : (imgBase.height * self.options.initial) / 100
    imgBase.style.clipPath = setInsetDirection(
      self.options.direction,
      initialClip,
    )

    // flip input range and adjust to the side if vertical
    if (self.options.direction === 'vertical') {
      range.style.transform = 'rotate(90deg)'
      range.style.width = imgBase.getBoundingClientRect().height + 'px'
      range.style.left =
        imgBase.getBoundingClientRect().right -
        range.getBoundingClientRect().left +
        7 +
        'px'
      range.style.top = imgBase.getBoundingClientRect().height / 2 + 'px'
      range.style.margin = '-1px 3px 1px'
    }

    // Applying Filters if any
    if (self.options.filter.active) {
      imgToSlide.style.filter = self.options.filter.effect
    }

    // EVENT REGISTRATIONS

    range.addEventListener('input', function() {
      handleSlides(self)
    })

    if (self.options.tooltips) {
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
        output.style.left =
          imgBase.getBoundingClientRect().right -
          range.getBoundingClientRect().left -
          45 +
          'px'
        outputTriangle.style.left =
          imgBase.getBoundingClientRect().right -
          range.getBoundingClientRect().left -
          22 +
          'px'
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
