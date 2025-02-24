// 1) pop

let numbers = [13, 4, 6, 7, 3]
let x = numbers.pop()
// console.log(x);
// console.log(numbers);

// 2) push 

let numbers1 = [13, 4, 6, 7, 3]

let newLength = numbers1.push(90, 50, 20, 40) // new length of array

// console.log(newLength);
// console.log(numbers1);

// 3) shift 

let numbers2 = [13, 4, 6, 7, 3]

let removedElement = numbers2.shift()
// console.log(removedElement);
// console.log(numbers2);

// 4) unshift 

let numbers3 = [13, 4, 6, 7, 3]

let newLength1 = numbers3.unshift(100, 300, 500, 1000, 600)
// console.log(newLength1);
// console.log(numbers3);

// 5) indexOf

let numbers4 = [13, 4, 6, 7, 3]

// console.log(numbers4.indexOf(80)); 
// returns -1 if element is not in array

// 6) includes

let numbers5 = [13, 4, 6, 7, 3]

// console.log(numbers5.includes(14));

// 7) reverse 

let numbers6 = [13, 4, 6, 7, 3]

numbers6.reverse()
// console.log(numbers6);

// 8) slice 

let numbers7 = [10, 20, 30, 40, 50, 60]

let newSlicedArray = numbers7.slice(2, 5)
console.log(newSlicedArray);

// 9) splice 

// remove
let numbers8 = [10, 20, 30, 40, 50, 60]

numbers8.splice(1, 4)

console.log(numbers8);   // [10, 60]

// add 

numbers8.splice(1, 0, 20, 30, 40, 50)

console.log(numbers8);  // [10, 20, 30, 40, 50, 60]


// map

const arr = [`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`]
const arr2 = [
    { title: 'mini1', description: 'des1', isPublished: true, date: '01-30-2022' },
    { title: 'mini2', description: 'des2', isPublished: true, date: '01-30-2022' },
    { title: 'mini3', description: 'des3', isPublished: false, date: '01-30-2022' },
    { title: 'mini4', description: 'des4', isPublished: true, date: '01-30-2022' },
    { title: 'mini5', description: 'des5', isPublished: true, date: '01-30-2022' }
]
// arr.map(function (element, index) {
//     console.log(`element = ${element} , index = ${index}`);
// })

arr2.map(function (element, index) {
    // console.log(`element = ${element} , index = ${index}`);
    console.log(element,`index = ${index}`);
})


// console.log(arr);




