import { Queue } from "../Queue.js" 

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);


function hotPotato(elementList, num){
    const queue = new Queue();
    const elimitatedList = []; //lista de elementos eliminados  

    for(let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }

    while(queue.size() > 1) {
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}

