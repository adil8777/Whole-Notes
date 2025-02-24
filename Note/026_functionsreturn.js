// Function Parametre and return

function funcName(num1, num2, num3, arr1) {
    console.log(arr1);
    console.log(num1 + num2 + num3)

}

returnValue = funcName(5, 6, 8, ['hamza', 'tomato'])
console.log(returnValue); // function return 'undefined' if we don't explicitly return a value


function func2(num1,num2) {
    console.log("heell")
    return num1 + num2
}
 
sum = func2(5,5)
console.log(sum);


// Questions



// Question 4

// function numbers(nummy) {
//     let sum = 0
//     for (let i = 0; i <= nummy; i++) {
//       sum = sum + i
//       console.log(sum);
//     }
//     return sum
// }

// // debugger
// sum = numbers(10)
// // console.log(sum);

// Question 9

function encountered(arry) {
    for (let i = 0; i < arry.length; i++) {
      // console.log(arry[i])
      if (arry[i] < 0) {
        return arry[i]
      }
    }
  
  }
  negative = encountered([10, 2, 3, 4, 5, -1, 6, -8, 7, 8, 9, 10])
  console.log(negative)