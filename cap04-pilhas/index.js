import {StackArray} from "./StackArray.js";
import {Stack} from "./Stack.js";

const stackArray = new StackArray();
console.log(stackArray.isEmpty());
stackArray.push(5);
stackArray.push(8);
console.log(stackArray.peek());
stackArray.push(11);
console.log(stackArray.size());
console.log(stackArray.isEmpty());
stackArray.push(15);
stackArray.pop();
stackArray.pop();
console.log(stackArray.size());

const stackObjeto = new Stack();
stackObjeto.push(5);
stackObjeto.push(8);
stackObjeto.pop();
