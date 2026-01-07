let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digire um numero inteiro: ", function (numero) {

    numero = Number(numero);

    if (numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz");
    } else if (numero % 3 == 0){
        console.log("Fizz");
    } else if (numero % 5 == 0){
        console.log("Buzz");
    } else {
        console.log("Nao e divisivel por 3 nem 5");
    }

    rl.close();
});