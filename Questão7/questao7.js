let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", function (frase){

    frase = frase.toLowerCase();

    frase = frase.split(" ").join("");

    let fraseInvertida = frase.split("").reverse().join("");

    if (fraseInvertida == frase){
        console.log("A frase e palindromo");
    } else {
        console.log("A frase nao e palindromo");
    }

    rl.close();
});