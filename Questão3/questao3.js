let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarIdades(anoNascimento, anoAtual) {
    let resultado = [];

    for (let i = 0; i < anoNascimento.length; i++) {
        let idade = anoAtual - anoNascimento[i];

        if (idade >= 18) {
            resultado.push("Maior");
            console.log("Pessoa " + (i + 1) + ": Maior de idade");
        } else {
            resultado.push("Menor");
            console.log("Pessoa " + (i + 1) + ": Menor de idade");
        }
    }
    return resultado;
}

let anosDeNascimento = [2005, 2010, 1998, 1982];

rl.question("Digite o ano atual: ", function (anoAtual) {
    anoAtual = Number(anoAtual);

    let retorno = verificarIdades(anosDeNascimento, anoAtual);

    console.log("Resultado: ", retorno);
    rl.close();
});