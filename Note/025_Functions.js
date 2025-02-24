// basic func syntax , declaration
function funcName() {

}

function checkNo() {
    let num = 5

    if (num > 0) {
        console.log("Positive")
    } else if (num < 0) {
        console.log("negative")
    } else {
        console.log("num is 0")
    }
}


checkNo()

// Question 1

function Divisibility() {
    let num = 15

    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`Divisible`);
    }
    else {
        console.log(`Not Divisible`);
    }
}


Divisibility()


// Question 2

function evennumber() {
    for (i = 1; i <= 20; i++) {
        if (i % 2 === 0)
            console.log(i);
    }

}

evennumber()


// Question 9
function encounter() {

    let array = [1, 2, 3, 4, 5, 6, -9, 7, 8, 9, 10]
    for (let i = 0; i < array.length; i++) {

        if (array[i] < 0) break

        console.log(array[i]);
    }
}

encounter()

// Question 7

function reverse() {
    let array = [1, 2, 3, 4, 5]
    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }

}

reverse()

// Question Table of 5
function table() {
    const table = 5
    for (let i = 1; i <= 10; i++) {
        console.log(`${table} * ${i} = ${i * table}`);
    }

}

table()