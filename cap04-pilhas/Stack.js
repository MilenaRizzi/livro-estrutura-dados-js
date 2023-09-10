         
//classe Pilha com objeto
export class Stack {
    constructor() {
        this.count = 0;
        this.items = {}; //um objeto ao inves de um array
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /*internamente o método push acima seria
    items = {
        0: 5,
        1:8
    }
    count = 2 */
    
    //count funciona como o tamanho da pilha
    size() {
        return this.count;
    }

    //verificar se a lista esta vazia compara se count é 0
    isEmpty(){
        return this.count === 0; 
    }

    //para remover elemento
    pop() {
        if(this.isEmpty()) {
            return undefined;//se a lista tiver vazia retorna unde...
        }
        //se não estiver vazia decrementa count
        this.count--;//para acessar o topo da pilha é necessário decrementar o contador - 1
        const result = this.items[this.count] //resultado recebe o elemento, ou seja, o item na posição count
        delete this.items[this.count];
        return result;
    }

    //espiando o topo de uma pilha, ou seja, no último elemento da lista
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
            return this.items[this.count - 1]; //para observar o topo
    }

    //para limpar a lista basta reiniciá-la com os mesmo valores usados no construtor
    clear() {
        this.items = {};
        this.count = 0;
    }
    /*ou poderia usar while
    --> !this.isEmpty -- quer dizer que equanto a lista não estiver vazia, eu removo um elemento.

    while (!this.isEmpty()) { 
        this.pop()
    }*/

    //para versão com objeto precisa do método toString para exibir os elementos da pilha
    toString() {
        if(this.isEmpty()) {
            return ``
        };
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;

    }


}

