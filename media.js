// const readline = require('readline');


// let num = readline.createInterface(
//     process.stdin, process.stdout);

// num.question('Digite a primeira nota', (A) => {
//     num1 = A;
// });
// num.question('Digite a primeira nota', (B) => {
//     num2 = B;
// });
// num.question('Digite a primeira nota', (C) => {
//     num3 = A;
// });

// let A = 5;
// let B = 1;
// let C = 6;

const A = 10;
const B = 10;
const C = 10;

res = (A + B + C)/3;

if (res >= 6) {
    console.log("aprovado\nmédia: " + res);
}else if(res <=6 && res >=4){
    console.log("recuperação\nmédia: " + res);
}else {
    console.log("reprovado\nmédia: " + res);
}