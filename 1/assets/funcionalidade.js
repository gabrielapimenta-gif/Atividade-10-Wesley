function processar() {
    const num = parseInt(document.getElementById("inputNumero").value);

    if (isNaN(num) || num < 0) {
        alert("Por favor, informe um número natural válido.");
        return;
    }

    const classificacao = verificarParOuImpar(num);
    document.getElementById("parOuImpar").innerText = classificacao;

    imprimirImpares(num);
}

function imprimirImpares(n) {
    let impares = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    document.getElementById("listaImpares").innerText = impares.join(", ");
}

function verificarParOuImpar(n) {
    if (n % 2 === 0) {
        return "O número " + n + " é PAR.";
    } else {
        return "O número " + n + " é ÍMPAR.";
    }
}