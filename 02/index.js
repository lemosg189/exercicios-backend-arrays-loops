const letras = ["A", "a", "e", "C", "E", "E"];

let qtd = 0;

for (let letra of letras) {
    if (letra === 'e' || letra === 'E') {
        qtd++;
    }
}
if (qtd === 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${qtd} letras "E" ou "e".`)

}

// console.log(`Foram encontradas ${qtd} letras "E" ou "e".`)


