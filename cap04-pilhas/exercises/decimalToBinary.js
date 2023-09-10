import { StackArray } from "../StackArray.js";

function decimalToBinary(decNumber) {
    const remtStack = new StackArray();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while(number > 0) {
        rem = Math.floor(number % 2);
        remtStack.push(rem)
        number = Math.floor(number / 2);
    }
    while(!remtStack.isEmpty()){
        binaryString += remtStack.pop().toString(); 
    }
    return binaryString;
}

decimalToBinary(25)
decimalToBinary(36)
