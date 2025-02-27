// DOM - Document Object Model

const root = document.querySelector(`#root`)
const button = document.querySelector("#button")
const name = document.querySelector("#name")
const result = document.querySelector(`#result`)

button.addEventListener(`click`,async function(){
    const name_value = name.value
    const response = await fetch(`https://api.genderize.io?name=${name_value}`)
    console.log(name_value);
    console.log(response);
    const data = await response.json()
console.log(data);

result.innerHTML = `
<p> Name : ${data.name} </p>
<p> Gender : ${data.gender} </p>
<p> Percentage : ${data.probability * 100} </p>
<p> Count : ${data.count} </p>
<p> Probability : ${data.probability} </p>

`
})
