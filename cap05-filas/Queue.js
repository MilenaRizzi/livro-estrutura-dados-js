export class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0; //Variável que vai controlar o primeiro elemento
        this.items = {};
    }

    //vai adicionar elemento na fila
    enqueue(element) {
        this.items[this.count] = element; //o objeto item na posicao count q inicia com 0 vai receber o element que foi passado como parametro 
        this.count++;
    }

    //remover elementos da fila
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];//result vai rebecer items na posicao lowest que começa com 0 
        //esse posição vai se referir ao primeiro elemento.

        delete this.items[this.lowestCount] //vou deletar o elemento 
        this.lowestCount++;
        return result
    }

    //espiar o elemento que está na frente da fila
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    //verificar se a fila esta vazia 
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    //verificar o tamanho da fila
    size() {
        return this.count - this.lowestCount
    }

    //verificar se a fila esta vazia -- posso usar qlqr jeito mas achei esse mais bonito
    // isEmpty() {
    //     return this.size === 0;
    // }

    //limpar a fila
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    //metodo toString para mostrar na tela
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

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue('John');
// queue.enqueue('Jack');
// console.log(queue.toString())

// queue.enqueue('Camila');
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.toString());