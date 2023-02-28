const numeros = [5, 6, 15, 28, 13, 11, 19];

let maior = numeros[0];
let menor = numeros[0];


for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;

    } else if (numero < menor) {
        menor = numero;

    }

}
let diferenca = maior - menor;
console.log(diferenca);