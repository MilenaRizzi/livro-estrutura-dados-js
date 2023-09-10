import { Dictionary } from "./Dictionary.js";

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log('existe a chave:', dictionary.hasKey('Gandalf')); // true
console.log('tamanho do dicionário:', dictionary.size()); // 3
console.log('chaves do dicionário:', dictionary.keys()); // ["Gandalf", "John", "Tyrion"]
console.log('valores do dicionário:', dictionary.values()); // ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log('pegando um elemento específico em dicionário:', dictionary.get('Tyrion')); // tyrion@email.com
dictionary.remove('John');

console.log('chaves do dicionário após remover um elemento:', dictionary.keys()); // ["Gandalf", "Tyrion"]
console.log('valores do dicionário após remover um elemento:',dictionary.values()); // ["gandalf@email.com", "tyrion@email.com"]

console.log('pares chave valor:',dictionary.keyValues()); // [{key: "Gandalf", value: "gandalf@email.com"}, {key: "Tyrion", value: "tyrion@email.com"}]
console.log('método toString:', dictionary.toString()); // [#Gandalf: gandalf@email.com],[#Tyrion: tyrion@email.com]

dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}, value: ${v}`);
});