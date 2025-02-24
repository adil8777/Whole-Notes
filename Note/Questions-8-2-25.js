// Q1

for(let i=1; i<=10; i++){
    console.log(i);
} 

// Q2

let array = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`]
for(i=0; i<array.length; i++){
    console.log(array[i]);
}

// Q3

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Q4

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum = sum + i
}

console.log(sum);

// Q5

const tableNum = 5
for(let i=1; i<=10; i++){
    console.log(`${tableNum} x ${i} = ${i*tableNum}`);
}

// Q10

const square= 1
for(i=1; i<=10; i++){

    console.log(i*i);
}

// Q9

let array2 = [10, 2, 3, 4, 5, -1, 6, -8, 7, 8, 9, 10]
for (let i = 0; i < array2.length; i++) {

    if (array2[i] < 0) {
        // break;
        continue
    }
    console.log(array2[i]);
}