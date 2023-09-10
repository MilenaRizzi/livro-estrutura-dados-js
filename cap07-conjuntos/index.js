import {Set} from "./Set.js";

const set = new Set();

// --------- Testando os métodos ----------
set.add(1);
console.log(set.values()); // outputs [1]
console.log(set.has(1)); // outputs true
console.log(set.size()); // outputs 1

set.add(2);
console.log(set.values()); // outputs [1, 2]
console.log(set.has(2)); // true
console.log(set.size()); // 2

set.delete(1);
console.log(set.values()); // outputs [2]

set.delete(2);
console.log(set.values()); // outputs []

// --------- Union ----------

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log('o conjunto com a união dos valores é', unionAB.values()); // [1, 2, 3, 4, 5, 6]
/**Observar que o elemento 3 está presente nos dois conjuntos, mas só aparece uma vez no conjunto de união final. */

// --------- Intersection ----------

setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const intersectionAB = setA.intersection(setB);
console.log('interseção de conjuntos', intersectionAB.values()); // [2, 3]

// --------- Difference ----------

setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const differenceAB = setA.difference(setB);
console.log('diferença de conjuntos', differenceAB.values()); // [1]

// --------- Subset ----------

setA = new Set();
setA.add(1);
setA.add(2);

setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB)); // true
console.log(setA.isSubsetOf(setC)); // false