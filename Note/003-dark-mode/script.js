// DOM - Document Object Model 

const heading = document.querySelector(".Heading")
const box = document.querySelector("#box")
const btn = document.querySelector("#button")
const doubleBtn = document.querySelector("#dbtn")
const username = document.querySelector("#username")
const root = document.querySelector('#root');


let isDark = false

btn.addEventListener('click', function () {

    const image = document.querySelector("#image")
    image.src = '../login and register form/tractor 1.jpg'

    if (isDark) {
        root.style.backgroundColor = 'white'
        isDark = false
    } else {
        root.style.backgroundColor = 'black'
        isDark = true
    }

})

