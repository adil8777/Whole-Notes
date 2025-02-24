const a = Math.floor(0.99)

console.log(a);

// const obj = {
//     name  : "hamza"
// }

// console.log(obj.name);

const math = {
    floor: function (num) {
        if (num > 0) {
            return parseInt(num)
        } else if (num < 0) {
            return parseInt(num) -1
        } else {
            return num
        }
    }
}

const num = math.floor(0.99)

console.log(num);

