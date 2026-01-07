let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um valor em reais: ", function (valorEmReal) {

    valorEmReal = Number(valorEmReal);

    let taxaEuro = 6.10;
    let taxaDolar = 5.70;

    let valorEmEuro = (valorEmReal / taxaEuro).toFixed(2);
    let valorEmDolar = (valorEmReal / taxaDolar).toFixed(2);

    console.log("Valor em real: " + valorEmReal);
    console.log("Valor em dolar: " + valorEmDolar);
    console.log("Valor em euro: " + valorEmEuro);

    rl.close();
});