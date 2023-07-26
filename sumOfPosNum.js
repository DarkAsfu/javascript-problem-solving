//  Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// arr = [2, -5, 10, -3, 7]

const sumPositveNum = (arr) =>{
    const positiveNumber = arr.filter((num) => num>0)
    const sum = positiveNumber.reduce((total, currentNum) => total + currentNum, 0)
    return sum;
}
const arr = [2, -5, 10, -3, 7];
const result = sumPositveNum(arr);
console.log(result);