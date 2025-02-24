// non primitve - object 

let empty = {} // empty object 

let details = {
    name: "Hamza",
    gender: "Male",
    age: 99,
    isStudent: true,
    address: 'C - 43 gtb nagar',
    wife: undefined,
    weight: null
}

console.log(details);
console.log(details.name);
details.name = `hamza sir`    // How to modify the key.
console.log(details.name, details.address);
console.log(details.age);
console.log(details.isStudent);
console.log(details.wife);
console.log(details.weight);


//How to Make Own Properties

const math = {
    Pi: 3.14,
    Speed_of_light: 6.25*(10 ** 18 )       //How to have number power in maths **
}
console.log(math.Pi);
console.log(math.Speed_of_light);

delete math.Speed_of_light   //How to delete Speed of light
console.log(math);
