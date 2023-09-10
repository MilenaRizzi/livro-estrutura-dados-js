import { HashTable } from "./HashTable.js"

const hash = new HashTable();
//adiconar elementos
hash.put('Gandalf', 'gandalf@gmail.com')
//hash.put('John', 'johnsnow@email.com');
//hash.put('Tyrion', 'tyrion@email.com');

//pegar valor dos elementos
console.log(hash.get('Tyrion'));
console.log(hash.get('Gandalf'));

//monstrar na tela key de referencia do elemento
console.log(hash.hashCode('Gandalf') + ' - Gandalf')
console.log(hash.hashCode('John') + ' - John')
console.log(hash.hashCode('Tyrion') + ' - Tyrion')

//remover elemento
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
