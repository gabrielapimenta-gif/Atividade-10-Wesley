function preencherMatriz() {
    const entrada = document.getElementById("dadosMatriz").value;
    const numeros = entrada.split(",").map(n => parseInt(n.trim()));

    if (numeros.length !== 9 || numeros.some(isNaN)) {
        alert("Insira exatamente 9 números inteiros.");
        return null;
    }

    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz.push(numeros.slice(i * 3, (i + 1) * 3));
    }
    return matriz;
}

function imprimirMatriz(m) {
    let texto = "";
    m.forEach(linha => {
        texto += linha.join(" | ") + "\n";
    });
    document.getElementById("saidaMatriz").innerText = texto;
}

function imprimirColunasPares(m) {
    let texto = "Colunas 0 e 2:\n";
    for (let i = 0; i < 3; i++) {
        texto += `Linha ${i}: [ ${m[i][0]} ] e [ ${m[i][2]} ]\n`;
    }
    document.getElementById("saidaMatriz").innerText = texto;
}

function imprimirLinhasImpares(m) {
    let texto = "Linha Ímpar (Índice 1):\n";
    texto += m[1].join(" | ");
    document.getElementById("saidaMatriz").innerText = texto;
}

function executar(tipo) {
    const matriz = preencherMatriz();
    if (!matriz) return;

    if (tipo === 'geral') imprimirMatriz(matriz);
    else if (tipo === 'colunasPares') imprimirColunasPares(matriz);
    else if (tipo === 'linhasImpares') imprimirLinhasImpares(matriz);
}