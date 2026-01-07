let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let quantidade = 0;
let contador = 0;
let indice = 0;

rl.question("Quantos numeros voce quer inserir no array? ", function (quantidadeNumeros){
    quantidade = Number(quantidadeNumeros);
    pedirNumero();
});

function pedirNumero(){
    if (indice < quantidade){
        rl.question("Digite o numero " + (indice + 1) + ": ",function (num){
            numeros.push(Number(num));
            indice++;
            pedirNumero();
        });
    } else {
        for (let i = 1; i < numeros.length; i++){
            if (numeros[i] > numeros[i - 1]){
                contador++;
            }
        }
        console.log("Vetor: ", numeros);
        console.log("Quantidade de numeros em ordem crescente: " + contador);
        rl.close();
    }
}