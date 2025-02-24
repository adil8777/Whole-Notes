const arr = [1,2,3,4,5,6,7,8]
const arr2 = [
{Title : `Micro`, description : `A very small nano element which cannot be seen with naked Eyes`, isPublished:`True`,Date: `26-08-2007`},
{Title : `Micro`, description : `A very small nano element which cannot be seen with naked Eyes`, isPublished:`True`,Date: `26-08-2007`},
{Title : `Micro`, description : `A very small nano element which cannot be seen with naked Eyes`, isPublished:`True`,Date: `26-08-2007`},
{Title : `Micro`, description : `A very small nano element which cannot be seen with naked Eyes`, isPublished:`True`,Date: `26-08-2007`},
{Title : `Micro`, description : `A very small nano element which cannot be seen with naked Eyes`, isPublished:`True`,Date: `26-08-2007`}
]

const result2 =arr2.map(function (element, index) {
    console.log(`element = ${element} , index = ${index}`);
const isPublished = element.isPublished
if(isPublished){
    return element
}
    console.log(result2);
 }
)
    