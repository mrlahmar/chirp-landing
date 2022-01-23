/* Description: Main JS File */

/*********************/
/* Mobie Navigation */
/*******************/
const nav = document.querySelector('nav>ul')
const toggle = document.querySelector('.toggle')

// hide or show navigation on click (mobile)
toggle.addEventListener('click', () => {
    nav.classList.toggle('show-nav')
})