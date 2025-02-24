const username = document.querySelector("#username")
const email = document.querySelector("#email_address");
const password = document.querySelector("#password")
const submitBtn = document.querySelector("#submitBtn")
const popup = document.querySelector(".submitted")
const form = document.querySelector(".f1")

console.log(form);
console.log(username)
console.log(email);
console.log(password);
console.log(submitBtn);

// submitBtn.addEventListener('click',function (e){
//     // e ---> event object
//     e.preventDefault()
//     // console.log('form submit');
//      console.log(username.value);
//      console.log(email.value);
//      console.log(password.value);
//      popup.style.display = 'inline'
// })

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('form submitted');
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    popup.style.display = 'inline'

    username.value = ''
    email.value = ''
    password.value = ''
})

