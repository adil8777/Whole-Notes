// Anonymous function expression

const func = function (num) {
    console.log(num);
    console.log("hello world");
}

// func(5)

// ... (Rest Operator)

const total = function (...num) {
    console.log(num);
}

total(5,6,7,8,9,"hamza",true , undefined , null , [0,0,0])


// que1 

// sum(5,5,1,1)

// Question 1

const numm = function (...numm) {

    console.log(numm);
    let sum = 0
    for (i = 0; i < numm.length; i++) {
      sum = numm[i] + sum
    }
    return sum
  }
  
  const sum = numm(1, 2, 3, 4, 5, 6, 7, 8, 9)
  
  console.log(sum);

// Type Conversion in JS
// Explicit Type Casting(Type C

// 1)Converting Number to a String
let num = 4949393
// console.log(num);
let str_num = String(num)

console.log(str_num);
console.log(typeof str_num);


// 2)Converting String to a Number

const str = '49393354.50'

const x = Number(str)
console.log(str);
console.log(x);

const y = parseInt(str)

console.log(y);


// 3)Converting to a Boolean


const m = null

const result  = Boolean(m)
console.log(result);

