export class Set {
    constructor() {
        this.items = {};
    }

    //hasOwnProperty devolve um booleano informando se o objeto tem a propriedade especificada DIRETAMENTE no objeto ou não 
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if(this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {}; 
    }

    /**devolve a quantidade de elementos presentes no conjunto
     * classe Obj contém o método keys, que devolve um array com todas as propriedades de um dado objeto
     * método compatível apenas com navegadores mais modernos tais como: IE9+, FF4+, Chrome5+, Opera12+
     */
    size() {
        return Object.keys(this.items).length;
    }

    /**compatível em qualquer navegador */
    sizeLegacy() {
        let count = 0;
        for(let key in this.items) {
            if(this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    //compatível apenas em navegadores mais modernos
    values() {
        return Object.values(this.items);
    }

    //compatível em qualquer navegador 
    valuesLegacy() {
        let values = [];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key);
            }
        }
        return values;
    }

    /**união de conjuntos
     * x está presente em A ou x está presente em B */
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet;
    }

    /**interceção de conjuntos
     * x está presente tanto em A quanto em B - compartilhamento de um ou mais elemento entre eles. 
    */
   intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if(otherValues.length - values.length > 0){
        biggerSet = otherValues;
        smallerSet = values;
    }
    smallerSet.forEach(value => {
        if(biggerSet.includes(value)) {
            intersectionSet.add(value)
        }
    })
    return intersectionSet;
   }
   /**diferença de conjuntos
    * x está presente em A, mas não está presente em B
    */
   difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
        if(!otherSet.has(value)){
            differenceSet.add(value);
        }
    })
    return differenceSet;
   }

   /**Subconjunto
    * A é um subconjunto de B, ou seja, A está incluido em B
    */
   isSubsetOf(otherSet) {
    if(this.size() > otherSet.size()) {
        return false;
    }
    let isSubSet = true;
    this.values().every(value => {
        if(!otherSet.has(value)) {
            isSubSet = false;
            return false;
        }
        return true;
    })
    return isSubSet;
   }
}

