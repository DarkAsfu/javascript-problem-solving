// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallestNum = (arr) =>{
    arr.sort((a, b) =>  a -b )
    const secondSmallest = arr[1];
    return secondSmallest;
}

const arr = [14, 12, 53, 12, 5, 10, 3, 7];
const result = secondSmallestNum(arr);
console.log(result);
