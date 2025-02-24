// padStart
const invoiceNumber = `45`;

const result = invoiceNumber.padStart(6 , '0');

console.log(result);

// padEnd
const lastfourDigit = `8777`

const hiddenAccountNo = lastfourDigit.padEnd(12 , `*`)

console.log(hiddenAccountNo);