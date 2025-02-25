// DOM - Document Object Model 

const heading = document.querySelector(".Heading")
const box = document.querySelector("#box")
const btn = document.querySelector("#button")
const doubleBtn = document.querySelector("#dbtn")
const username = document.querySelector("#username")


// box.textContent = '<p> <u> hello </u> </p>'
box.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <style>
        .submitted {
            display: none;
        }
    </style>
</head>

<body>
    <form class="f1">
        <img src="./tractor 1.jpg" alt="">
        <h2>Create New Account</h2>
        <div class="f2">
            <div>
                <label for="username">Username</label>
                <input type="text" placeholder="Enter Username" id="username" required>
            </div>
            <div>
                <label for="email address">Email Address</label>
                <input type="email" placeholder="Enter Email address" id="email_address" required>
            </div>
            <div>
                <article>
                    <label for="password">Password</label>
                    <span>Forget password?</span>
                </article>
                <input type="password" placeholder="Enter Password" id="password" required minlength="8">
            </div>
        </div>
        <button type="submit" id="submitBtn">Sign in</button>
        <span class="submitted">Your form submitted</span>
        <p>Already have account? <a href="./login.html">Login</a></p>
    </form>
</body>

</html>
`

