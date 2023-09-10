import { ValuePair } from "./models/ValuePair.js";
import { defaultToString } from "./util.js";

export class HashTable {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //soma o valor de cada caractere ASCII que compõe a key e retorna o valor da chave
    loseloseHashCode(key) {
        if(typeof key === 'number'){
            return key
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for(let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37; //divisão por 37 para conseguir números menores
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    //insere chave e valor
    put(key, value) {
        if(key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
    }

    //obtem um valor da tabela hash
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value
    }

    //remove um valor da tabela hash
    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair != null) {
            delete this.table[hash]; //ao invés do delete posso atribuir a opção null ou undefined à posição hash removida. 
            return true;
        }
        return false;
    }
}