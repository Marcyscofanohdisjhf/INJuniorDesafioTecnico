let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function analisarConsumo(consumos, limite) {
    let classificacoes = [];

    for (let i = 0; i < consumos.length; i++) {

        if (consumos[i] < limite) {
            classificacoes.push("Econômico");
            console.log("Aparelho " + (i + 1) + ": Econômico");

        } else if (consumos[i] == limite) {
            classificacoes.push("No Limite");
            console.log("Aparelho " + (i + 1) + ": No Limite");

        } else {
            classificacoes.push("Acha que é sócio da Enel");
            console.log("Aparelho " + (i + 1) + ": Acha que é sócio da Enel");
        }
    }

    return classificacoes;
}
// exemplo de consumos
let consumos = [80, 100, 150, 60, 100];

rl.question("Digite o limite de consumo (kWh): ", function (limite) {

    limite = Number(limite);

    let resultado = analisarConsumo(consumos, limite);

    console.log("Resultado:", resultado);

    rl.close();
});