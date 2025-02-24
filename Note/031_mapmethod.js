const arr = [`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`]
const arr2 = [
    { title: 'mini1', description: 'des1', isPublished: true, date: '01-30-2022', author: 'Pablo' },
    { title: 'mini2', description: 'des2', isPublished: true, date: '01-30-2022', author: 'Pablo' },
    { title: 'mini3', description: 'des3', isPublished: false, date: '01-30-2022', author: 'Pablo' },
    { title: 'mini4', description: 'des4', isPublished: false, date: '01-30-2022', author: 'Henry' },
    { title: 'mini5', description: 'des5', isPublished: true, date: '01-30-2022', author: 'Henry' },
    { title: 'mini6', description: 'des6', isPublished: true, date: '01-30-2022', author: 'Henry' },
]

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
// map methods returns an array 


const result2 = arr2.map(function (element, index) {
    console.log(element);
    const isPublished = element.isPublished
    if(isPublished){
        return element
    }

    // const author = element.author

    // if(author === 'Henry'){
    //     return element
    // }


})

console.log(result2);

const result3 = arr3.map(function (element, index) {
    // console.log(`element = ${element} , index = ${index}`);
    // console.log(element,`index = ${index}`);
    return element * element * element
})

// console.log(result3);



