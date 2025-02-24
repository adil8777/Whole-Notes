// spread operator ... 

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr4 = [true, false, null, undefined]
// const arr3 = arr1.concat(arr2)
const arr3 = [...arr1, ...arr2, ...arr4]
console.log(arr3);

// object

const obj1 = {
    name : 'hamza',
    email : 'ekrr@gmail.com'
}
const obj2 = {
    address  : 'c-rekfs',
    city : 'pan'
}

const resultObj = {...obj1, ...obj2}
console.log(resultObj);

// destructing  (v.imp)

const {name , city } = resultObj
console.log(name);
console.log(city);






// // Spread Operator

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [true, false, undefined, null]

// const arr4 = [...arr1,...arr2,...arr3]
// console.log(arr4);

// // Object Operator

// const obj1 = {
//     name : `Adil`,
//     email : `adil538466@gmail.com`,
// }
// const obj2 = {
//     city : `Prayagraj`,
// }

// const result = {...obj1,...obj2}
// console.log(result);

// // Destructing (V.Imp method)

// const {name, city} = result
// console.log(name);
// console.log(city);