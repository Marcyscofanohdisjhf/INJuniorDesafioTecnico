function encontrarElementoUnico(vetor) {
    let elemento = 0;

    for (let i = 0; i < vetor.length; i++) {
        elemento = elemento ^ vetor[i];
    }

    return elemento;
}

// exemplo de uso
let numeros = [2, 3, 5, 4, 5, 3, 4];

let resultado = encontrarElementoUnico(numeros);
console.log("Elemento único:", resultado);
