const disjuntores = [false, true, true, false, false, true, false, false];

let disjuntoresLigados = [];

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i] === true) {
        disjuntoresLigados.push(i);
    }
}
console.log(disjuntoresLigados);