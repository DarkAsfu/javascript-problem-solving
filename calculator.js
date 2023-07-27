const calculate = (num1, num2, operator) =>{
    const result = `${num1} ${operator} ${num2}`;
    console.log(eval(result));
}

const num1 = 10;
const num2 = 20;
const operator = '+';
calculate(num1, num2, operator);