// DOM - Document Object Model 

const root = document.querySelector('#root')

const btn = document.querySelector("#btn")
const name = document.querySelector("#name")
const result = document.querySelector('#result')

// async function is an asynchronous , takes time
// await - code will wait untill response
btn.addEventListener(`click`,async function(){
    const name_value = name.value 
    const response = await fetch(`https://api.genderize.io?name=${name_value}`) 
    // CONVERTING INTO JSON 
    const data = await response.json()
    console.log(data);

    result.innerHTML = `
    <p> Name : ${data.name} </p> 
    <p> Gender : ${data.gender} </p>
    <p> Percentage : ${data.probability * 100} </p>

    `
})


