import './scss/style.scss'

const btnHamburger = document.querySelector('#btn_hamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    // Close Hamburger Menu
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  } else {
    // Open Hamburger Menu
    body.classList.add('noscroll')
    header.classList.add('open')
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  }
})

const list = document.querySelector('.carousel')
const btnPrevious = document.querySelector('#btn_previous')
const btnNext = document.querySelector('#btn_next')

// We'll use the width of one of the items to decide how many pixels we want our carousel to scroll.
const item = document.querySelector('.item')
const itemWidth = item.offsetWidth

btnPrevious.addEventListener('click', function () {
  list.scrollBy({ behavior: 'smooth', left: -itemWidth })
})

btnNext.addEventListener('click', function () {
  list.scrollBy({ behavior: 'smooth', left: itemWidth })
})
