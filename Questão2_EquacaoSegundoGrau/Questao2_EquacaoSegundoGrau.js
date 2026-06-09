let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor de A: ", function (a) {
    rl.question("Digite o valor de B: ", function (b) {
        rl.question("Digite o valor de C: ", function (c) {

            a = Number(a);
            b = Number(b);
            c = Number(c);

            let delta = (b * b) - (4 * a * c);

            console.log("Delta = " + delta);

            if (delta > 0) {
                let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                let x2 = (-b - Math.sqrt(delta)) / (2 * a);

                console.log("A equacao de segundo grau possui duas raizes reais: ");
                console.log("X1 = " + x1);
                console.log("X2 = " + x2);

            } else if (delta == 0) {
                let x = -b / (2 * a);

                console.log("A equacao de segundo grau tem apenas uma raiz real: ");
                console.log("X = " + x);

            } else {
                console.log("A equacao nao possui raizes reais");
            }

            rl.close()
        });
    });
});
