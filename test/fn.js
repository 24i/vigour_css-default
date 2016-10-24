'use strict'
const test = require('tape')

module.exports = (node, state) => {
  test('border-box is set on all elements', t => {
    const elements = document.getElementsByTagName('*')
    for (var i = 0, max = elements.length; i < max; i++) {
      t.equals(window.getComputedStyle(elements[i]).boxSizing, 'border-box', `box sizing is border box on ${elements[i].localName}`)
    }
    t.end()
  })

  test('border-box is set on title', t => {
    // console.log('window.getComputedStyle(node): %O', window.getComputedStyle(node))
    t.equals(window.getComputedStyle(node).boxSizing, 'border-box', 'box sizing is border box')
    t.end()
  })
}
