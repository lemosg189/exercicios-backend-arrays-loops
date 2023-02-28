const numeros = [54, 10, 22, 14, 87, 10, 284, 10, 15, 10];

let qtdNDez = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        console.log(i)
        qtdNDez++
    }
}

if (qtdNDez === 0) {
    console.log('-1')

}

