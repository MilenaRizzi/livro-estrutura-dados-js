//adicionar um novo valor, ou atualizar um valor existente
//classe utilizada no método set
export class ValuePair {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}