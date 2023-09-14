// const array = [1,2,3,4,5];
// function somma(array: number[]): number {
//     let somma = 0;
//     for(let num of array){
//         somma += num;
//     }
//     return somma;
// }
// function media(array: number[]): number{
//     return somma(array) / array.length;
// }
// console.log(`somma = ${somma(array)}`);
// console.log(`media = ${media(array)}`);
// 
// min = -1 max = 12
const arrayMinMax = [3, 2, 1, 5, 4, 12, -1, 5];
const minimo = (array) => {
    let min = array[0];
    for (let n of array) {
        if (n < min) {
            min = n;
        }
    }
    return min;
};
const massimo = (array) => {
    let max = array[0];
    for (let n of array) {
        if (n > max) {
            max = n;
        }
    }
    return max;
};
console.log(`min = ${minimo(arrayMinMax)}`);
console.log(`max = ${massimo(arrayMinMax)}`);
