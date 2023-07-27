// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumWithSum = (arr, targetValue) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == targetValue) {
                return [
                    i,
                    j
                ]
            }
        }
    }
    return []
}

const arr = [1, 3, 6, 8, 11, 15];
const targetValue = 21;
const result = findTwoNumWithSum(arr, targetValue)
console.log(result);
