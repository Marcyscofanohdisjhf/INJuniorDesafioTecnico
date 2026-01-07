let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fila = [];

function mostrarMenu(){
    console.log("\n=== FILA DE ATENDIMENTO ===");

    if (fila.length == 0){
        console.log("Nnehum cliente na fila");
    } else {
        for (let i = 0; i < fila.length; i++){
            console.log((i + 1) + "º " + fila[i]);
        }
    }

    console.log("\n1 - Novo Cliente");
    console.log("2 - Atender Cliente");
    console.log("3 - Sair");

    rl.question("Escolha uma opcoa: ", function (opcao){
        if (opcao == "1"){
            novoCliente();
        } else if (opcao == "2"){
            atenderCliente();
        } else if (opcao == "3"){
            console.log("Encerrando...");
            rl.close();
        } else {
            console.log("Opcao invalida");
            mostrarMenu();
        }
    });
}

function novoCliente(){
    rl.question("Digite o nome do cliente: ",function (nome){
        fila.push(nome);
        console.log("Cliente adicionado na fila.");
        mostrarMenu();
    });
}

function atenderCliente(){
    if (fila.length == 0){
        console.log("Nao tem clientes.");
    } else {
        let clienteAtendido = fila.shift();
        console.log("Atendendo cliente: " + clienteAtendido);
    }
    mostrarMenu();
}

mostrarMenu();
