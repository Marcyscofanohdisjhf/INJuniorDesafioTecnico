let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let time = [];

function adicionarJogador(nome, idade, posicao, pontuacao){
    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };

    time.push(jogador);
    console.log("Jogador adicionador ao time.");
}

function buscarPorPosicao(posicao){
    let encontrou = false;

    for (let i = 0; i < time.length; i++){
        if (time[i].posicao.toLowerCase() == posicao.toLowerCase()){
            console.log(
                "Nome: " + time[i].nome +
                ", Idade: " + time[i].idade +
                ", Pontuacao: " + time[i].pontuacao
            );
            encontrou = true;
        }
    }

    if (!encontrou){
        console.log("Nao tem nenhum jogador nessa posicao");
    }
}

function listarTime(){
    if (time.length == 0){
        console.log("Nao tem nenhum jogador cadastrado");
    } else {
        for (let i = 0; i < time.length; i++){
            console.log(
                (i + 1) + " - " + time[i].nome +
                ", " + time[i].idade +
                " anos, " + time[i].posicao +
                ", Pontuacao: " + time[i].pontuacao
            );
        }
    }
}

function calcularPontuacaoMedia(){
    if (time.length == 0){
        console.log("Nao tem jogadores")
        return;
    }

    let soma = 0;

    for (let i = 0; i < time.length; i++){
        soma += time[i].pontuacao;
    }

    let media = soma / time.length;
    console.log("Pontuacao media do time: " + media.toFixed(2));
}

function menu(){
    console.log("\n--- MENU ---");
    console.log("1 - Adicionar jogador");
    console.log("2 - Buscar por posicao");
    console.log("3 - Listar time");
    console.log("4 - Calcular pontuacao media");
    console.log("5 - Sair");

    rl.question("Escolha uma opcao: ", function (opcao){
        if (opcao == 1){
            rl.question("Nome: ", function (nome){
                rl.question("Idade: ", function (idade){
                    rl.question("Posicao: ", function (posicao){
                        rl.question("Pontuacao: ", function (pontuacao){
                            adicionarJogador(nome, Number(idade), posicao, Number(pontuacao));
                            menu();
                        });
                    });
                });
            });
        } else if (opcao == 2){
            rl.question("Digite a posicao: ", function (posicao){
                buscarPorPosicao(posicao);
                menu();
            });
        } else if (opcao == 3){
            listarTime();
            menu();
        } else if (opcao == 4){
            calcularPontuacaoMedia();
            menu();
        } else if (opcao == 5){
            console.log("Encerrando...");
            rl.close();
        } else {
            console.log("Opcao invalida");
            menu();
        }
    });
}
menu();