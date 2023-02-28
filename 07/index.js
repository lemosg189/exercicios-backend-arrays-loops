const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomeComA = [];

for (let palavra of nomes) {
    let primeiraLetra = palavra[0]
    if (primeiraLetra === 'A' || primeiraLetra === 'a') {
        // nomeComA = + letra;
        nomeComA.push(palavra);

    }
}
console.log(nomeComA);