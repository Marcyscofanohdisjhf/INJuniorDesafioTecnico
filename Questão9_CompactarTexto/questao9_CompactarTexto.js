function compactarTexto(texto) {

    let resultado = "";
    let contador = 1;

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] == texto[i + 1]) {
            contador++;
        } else {
            resultado = resultado + texto[i] + contador;
            contador = 1;
        }
    }
    return resultado;
}
// testes
console.log(compactarTexto("hhhhkktt"));
console.log(compactarTexto("aaabbcccc"));
