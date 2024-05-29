
// Função para sortear um número inteiro entre min (inclusivo) e max (inclusivo)
function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para sortear múltiplos números
function sortearNumeros(quantidade, min, max) {
    let numerosSorteados = [];
    for (let i = 0; i < quantidade; i++) {
        numerosSorteados.push(sortearNumero(min, max));
    }
    return numerosSorteados;
}

// Função para realizar o sorteio e exibir os resultados
function realizarSorteio() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);

    let numeros = sortearNumeros(quantidade, min, max);

    // Exibindo os números sorteados
    let resultadoDiv = document.querySelector('.sortear');
    resultadoDiv.innerHTML = `<h2>Números Sorteados:</h2><p>${numeros.join(', ')}</p>`;
}
