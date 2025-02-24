const mix = [true, 38, 'hamza', undefined, null]

// properties 

console.log(mix.length);
console.log(mix[mix.length - 1]);


// methods


// pop
const arr = [`This`, `is`, `an`, `array`]
arr.pop() // remove last element

console.log(arr);

// push
const arr2 = [`january`, `february`, `march`]
arr2.push(`april`)  // append element at last 
console.log(arr2);

// at
const arr3 = [`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`]
let lastDay = arr3.at(arr3.length - 1)
console.log(lastDay);
console.log(arr3.at(3));

// shift 

const arr4 = [`Father`, `Mother`, `Brother`, `Sister`, `Granny`]
arr4.shift()

console.log(arr4);

// unshift 

const arr5 = [`Father`, `Mother`, `Brother`, `Sister`, `Granny`]
arr5.unshift(`Grand Father`)
console.log(arr5);

// concat

const arr6 = [`Grand`, `Elder`, `Micro`]
const arr7 = [`Father`, `Brother`, `Scope`]

const concatedArray = arr6.concat(arr7, arr5)
console.log(concatedArray);

// slice 

const arr8 = [`Father`, `Mother`, `Brother`, `Sister`, `Granny`]
const slicedArray = arr8.slice(1, 4)
const slicedArray2 = arr8.slice(2, arr8.length)
console.log(slicedArray, slicedArray2);

// splice()

const monthArr = [`january`, `february`, `march`, `april`, `may`]

// monthArr.splice(1, 2);
// monthArr.splice(1, 1);                                                   
monthArr.splice(2, 0, 'Birthday')
console.log(monthArr);


