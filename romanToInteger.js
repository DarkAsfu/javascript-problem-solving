// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (roman) => {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let result = 0;
    const length = roman.length;

    for (let i = 0; i < length; i++) {
        const currentCharValue = romanMap[roman[i]];
        const nextCharValue = romanMap[roman[i + 1]];

        if (i < length - 1 && currentCharValue < nextCharValue) {
            result -= currentCharValue;
        } else {
            result += currentCharValue;
        }
    }

    return result;
};

const str = 'MV';
const result = romanToInteger(str);
console.log(result);
