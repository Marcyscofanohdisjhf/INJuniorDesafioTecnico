let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n){
    if (n == 0){
        return 0;
    } else if (n == 1){
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

rl.question("Digite um número maior que 0: ", function (numero){

    numero = Number(numero);

    if (!Number.isInteger(numero) || numero < 0){
        console.log("Digite apenas números maiores que 0");
        rl.close();
        return;
    }

    let sequencia = [];

    for (let i = 0; i < numero; i++){
        sequencia.push(fibonacci(i));
    }

    console.log("Sequencia de fibonacci: ");
    console.log(sequencia);

    rl.close();
})