//replace()
const text = `Apple Banana Banana`

const result = text.replace(`Banana`, `Orange`)
const result1 = text.replace(`hcgfdfgdfna`, `Orange`)
console.log(result);
console.log(result1); //returns original string


//replaceAll()
const happu = text.replaceAll(`Banana`, `Strawberry`)
console.log(happu);