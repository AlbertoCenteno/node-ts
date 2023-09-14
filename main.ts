// import faker from 'faker';


// let myVar: string = 'ciao';

// const myConstant = 'ciao';

// let myNumber: number = 5;

// let myBoolean: boolean = true;

// let myUnefinedVar: undefined;


// let myAny: any; si può assegnare tutto quello che vogliamo


// let myList: number[] = [12, 13, 47, 50];

// let myStringList: string[] = ['ad', 'asdas', 'ciao'];


// let myTuple: [string, number] = ['ciao', 10];

// cicli

// let x = 1;
// while (x< 10){

//     if(x !== 5){
//         console.log(`\t${x}^2 = ${x * x}`);
//     }
//     else{
//         console.log(`\tx vale 5!`);
//     }

//     x = x + 1;
// }

// funzioni

// function hello(name: string): string{
//     console.log('ciao mondo');
//     console.log(`ciao da ${name}`);
//     return 'questa è la stringa di ritorno';
// }

// const retHello1 = hello('alberto');
// const retHello2 = hello('rossella');

// console.log(retHello1);

// console.log(faker.name.firstName());

import fs from 'fs';

const readmeFile = fs.readFileSync('./README.md');
const readme = readmeFile.toString();

console.log(readme);

fs.writeFileSync('./README.copy.md', 'Copia from README.md\n\n' + readme);