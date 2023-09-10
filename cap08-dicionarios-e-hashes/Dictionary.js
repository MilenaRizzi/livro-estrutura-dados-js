import { defaultToString } from "./util.js";
import { ValuePair } from "./models/ValuePair.js";

export class Dictionary {
    
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //verifica se a chave está presente no dicionário
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    //adicionar um novo valor, ou atualizar um valor existente
    set(key, value) {
        if(key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    //remove um valor do dicionário 
    remove(key) {
        if(this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    //obter um valor do dicionário
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    //devolve um array com todos os objetos ValuePair presentes no dicionário
    keyValues() {
        return Object.values(this.table);
    }

    //devolve todas as chaves (originais) usadas para identificar um valor na classe Dictionary
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    //devolve um array com todos os valores armazenados no dicionário
    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }

    //itera pelos valores armazenados 
    forEach(callbackFn) {
        const valuesPairs = this.keyValues();
        for(let i = 0; i < valuesPairs.length; i++) {
            const result = callbackFn(valuesPairs[i].key, valuesPairs[i].value);
            if(result === false){
                break;
            }
        }
    }

    //devolve quanto valores estão presentes no dicionário
    size() {
        return Object.keys(this.table).length;
    }

    //verificar se o dicionário está vazio
    isEmpty() {
        return this.size === 0;
    }

    //para limpar o dicionário
    clear() {
        this.table = {};
    }

    toString() {
        if(this.isEmpty()){
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`; //chama o método toString de valuePairs que retorna key: value.
        for(let i = 1; i < valuePairs.length; i++){
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString;
    }

}