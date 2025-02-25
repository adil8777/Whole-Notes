// DOM - Document Object Model 

const heading = document.querySelector(".Heading")
const box = document.querySelector("#box")
const btn = document.querySelector("#button")
const doubleBtn = document.querySelector("#dbtn")
// viewing elements 

console.log(heading);
console.log(box);
console.log(btn);

// accessing content inside a element 

console.log(heading.textContent);
const c = box.textContent
console.log(c);


// changing inner text (HTML change)
heading.textContent = 'Hi i am hamza'
// console.log(heading.textContent);
box.textContent = "hello hello"


// changing styles (css change)

// heading.style.color = 'red'
// heading.style.textAlign = 'center' 


// Event listeners 

btn.addEventListener('click', function () {
    console.log("BTn is clicked")
    heading.style.color = 'red'
    heading.style.textAlign = 'center'
    // box.style.border = '2px solid red'
})

box.addEventListener('mouseover', function () {
    // console.log('fired');
    box.style.backgroundColor = 'red'
})

box.addEventListener("mouseleave", function () {
    console.log('mouse leave');
    box.style.backgroundColor = 'green'
})

doubleBtn.addEventListener("dblclick",function (){
    console.log('btn clicked twice');
    heading.textContent = "Button is clicked twice"
})

const username = document.querySelector("#username")

username.addEventListener("input",function (){
    // console.log('change');
    console.log(username.value);
})






