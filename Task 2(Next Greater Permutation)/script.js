function nextGreater(num) {
    const digits = num.toString().split('').map(num => parseInt(num));
    
    let indexToSwap = -1;
    // fiding a index where a smaller number appears before a larger one
    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            indexToSwap = i;
            break;
        }
    }
    // if there is no smaller number before larger one
    if (indexToSwap === -1) return '-1';
    
    let swapIndex = -1;
    // finding the digit which is greater than the  indexToSwap digit
    for (let i = digits.length - 1; i > indexToSwap; i--) {
        if (digits[i] > digits[indexToSwap]) {
            swapIndex = i;
            break;
        }
    }
    // swaping the digit of indexToSwap and digit of swapIndex 
    let temp = digits[indexToSwap];
    digits[indexToSwap] = digits[swapIndex];
    digits[swapIndex] = temp;
    
    // Extracting the digits before and including the indexToSwap
    const leftPart = digits.slice(0, indexToSwap + 1);
    // Extracting the digits after the indexToSwap and reversing them 
    const rightPart = digits.slice(indexToSwap + 1).reverse();
    
    // Joining the left and right parts into a single string, converting it to an integer, and returning the result
    return parseInt([...leftPart, ...rightPart].join(''));
    
}

function calculate() {
    const input = document.getElementById('input').value;
    // Checking if there is invalid input
    if (input === '' || isNaN(input) || !/^\d+$/.test(input)) {
        alert("Please enter a valid number.");
        document.getElementById('result').innerHTML = '';
        input.innerHTML = ''
        return;
    }else{
        const result = nextGreater(input);
        document.getElementById('result').innerHTML = result;
    }
}


function resetFields() {
    document.getElementById('input').value = ''; // Clears the input field
    document.getElementById('result').innerHTML = ''; // Clears the result
}