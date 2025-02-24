let age = 88

if (age > 19) { // if(Boolean)  // Boolean : false , true
    console.log("You are eligible to drive car");
}
else {
    console.log("You are not eligible");
}

let age_as = 17

if (age_as >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible");
}

// example 1
// let email = prompt("Enter your email")


// console.log(email);


// if (email) {
//     alert("Move to next.")

//     let password = prompt("Enter your password")

//     if (password) {
//         alert("Password accepted.")
//         console.log(password);
//     } else {
//         alert("Please! Enter your Password.")
//     }
// } else {
//     alert("Email is Required.")
// }

// Example 2

const email = prompt("Enter your email")
const password = prompt('Enter your password')

if (email && password) {

    console.log(email);
    console.log(password);
    console.log(password.length);

    if (password.length < 8 || !password.includes('#') || !email.includes('@gmail.com')) {
        alert("password must be atleast 8 digits or @gmail is must included")
    } else {
        alert("You are registered")
    }
}
else {
    alert("Email or Password invalid")
}

//Example 3

let a = 20;

if (a > 18 && a < 80) {
    console.log(`you can drive`);
} else if (a === 18) {
    console.log(`You can apply for license`);
} else if (a >= 80) {
    console.log(`you are old. you cannot drive. go rest in peace`);
}
else {
    console.log(`you can't drive`);
}

// if (a > 18 && a < 80) {          //In this example each if will execute!
//     console.log(`you can drive`);
// }

// if (a === 18) {
//     console.log(`You can apply for license`);
// }

// if (a >= 80) {
//     console.log(`you are old. you cannot drive. go rest in peace`);
// } else {
//     console.log(`you can't drive`);
// }