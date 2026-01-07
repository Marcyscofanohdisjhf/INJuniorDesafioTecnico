let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFatorial() {
    rl.question("Digite um numero inteiro positivo: ", function (num) {

        num = Number(num);

        if (!Number.isInteger(num) || num <= 0) {
            console.log("Nao e possivel calcular o fatorial deste numero");
            calcularFatorial();
            return;
        }

        let fatorial = 1;

        for (let i = 1; i <= num; i++) {
            fatorial = fatorial * i;
        }

        console.log("Fatorial de " + num + " e: " + fatorial);

        rl.question("Deseja calcular o fatorial de outro numero? (S/N): ", function (resposta) {

            if (resposta == "S" || resposta == "s") {
                calcularFatorial();
            } else if (resposta == "N" || resposta == "n") {
                console.log("Encerrando...");
                rl.close();
            } else {
                console.log("Resposta invalida, encerrando...");
                rl.close();
            }
        });
    });
}

calcularFatorial();