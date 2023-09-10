//minha resolução

console.log(decinalParaBinario(25))
console.log(decinalParaBinario(36))

function decinalParaBinario(numero) {
    const binario = [];
    let guarda = 0;
    while(numero > 0) {
        if(numero % 2 > 0) {
            guarda = Math.floor(numero / 2);
            binario.push(1)
        } else {
            binario.push(0)
            guarda = Math.floor(numero / 2);
        } 
        numero = guarda;
    }
    return binario.reverse().join('');

}