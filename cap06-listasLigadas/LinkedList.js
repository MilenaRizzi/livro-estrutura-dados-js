import { defaultEquals } from './util.js';
import { Node } from './models/linked-list-models.js';

export class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    //insere um elemento no final da lista
    push(element) {
        const node = new Node(element);
        let current; 
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = node;
        } 
        //para controlar o tamanho do LinkedList
        this.count++;
    }

    // removeAt(index) {

    //     if(index >= 0 && index < this.count) {
    //         let current = this.head;
    //         //remove o primeiro elemento 
    //         if (index === 0){
    //             this.head = current.next; 
    //         } else {
    //             let previous;
    //             for(let i = 0; i < index; i++) {
    //                 previous = current;
    //                 current = current.next;
    //             }
    //             previous.next = current.next;
    //         }
    //         this.count--;
    //         return current.element;
    //     }
    //     return undefined;
    // }

    //refatorando o método remove -- para isso iremos separá-lo
    //devolve um elemento que está em uma posição específica da lista
    getElementAt(index){
        if(index >= 0 && index <= this.count){
            let node = this.head;
            for(let i = 0; i < index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        //esse undefined é para caso não tenha um indice válido, ou seja, caso não entre no if.
        return undefined;
    }

    //remove um item de uma posição específica da lista
    removeAt(index) {
        if (index >= 0 && index < this.count) {
          let current = this.head;
          if (index === 0) {
            this.head = current.next;
          } else {
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = current.next;
          }
          this.count--;
          return current.element;
        }
        return undefined;
      }

    //inserindo um elemento em uma posição específica
    insert(element, index){
        //1° verificar se os valores não estão fora do intervalo
        if(index >= 0 && index <= this.count) {
            const node = new Node(element);
            if(index === 0) {
                const current = this.head;//se eu quero adc um elemento no inicio da lista eu atribuo a currente(Atual) o que está na cabeça do array
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++ //atualiza o tamanho do array
            return true;
        } 
        return false //caso o index seja invalido, ou seja, não entra no primeiro if cai direto aqui
    }

    indexOf(element){
        let current = this.head;
        for(let i = 0; i < this.count; i++){
            /*se o elemento que estou procurando for igual ao elemento em current então 
            retorna o indice*/
            if(this.equalsFn(element, current.element)){
                return i;
            }
            //se não, atual recebe o próximo, ou seja, iteramos para o prox nó da lista
            current = current.next;
        }
        return -1;
    }

    //remove um elemento
    remove(element){
        //chamo o método indexOf para achar o indice do elemento 
        const index = this.indexOf(element)
        return this.removeAt(index);
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.size === 0;
    }

    getHead(){
        return this.head;
    }

    clear() {
        this.head = undefined;
        this.count = 0;
    }

    toString(){
        if(this.head == null){
            return '';
        }

        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
