 export class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0; //Variável que vai controlar o primeiro elemento
        this.items = {};
    }

    addFront(element){
        if(this.isEmpty()) {
            this.addBack(element)
        } else if(this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];//result vai rebecer items na posicao lowest que começa com 0 
        //esse posição vai se referir ao primeiro elemento.

        delete this.items[this.lowestCount] //vou deletar o elemento 
        this.lowestCount++;
        return result
    }

    removeBack() {
            if (this.isEmpty()) {
              return undefined;
            }
            this.count--;
            const result = this.items[this.count];
            delete this.items[this.count];
            return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack() {
        if(this.isEmpty()) return undefined;
        return this.items[this.count - 1]; //para observar o topo
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return undefined;
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }
}

