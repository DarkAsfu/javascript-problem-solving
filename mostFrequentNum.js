const mostFreqNum = (arr) =>{
    let maxCount = 0;
    let mostFrequentNum = null;
    for(let i = 0; i < arr.length; i++){
        let numCount = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                numCount++;
            }
        }
        if(numCount > maxCount){
            maxCount = numCount;
            mostFrequentNum = arr[i]
        }
    }
    return mostFrequentNum;
}

const arr = [12, 52, -52, 12, 52, 52 ,36, 74, 56, 67];
const result = mostFreqNum(arr);
console.log(result);