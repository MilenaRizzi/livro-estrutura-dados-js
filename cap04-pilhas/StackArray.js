export class StackArray {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = []; 
    }
} 

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

console.log(decimalToBinary(25))
console.log(decimalToBinary(36))