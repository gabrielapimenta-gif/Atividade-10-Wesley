function lerVetor() {
    const entrada = document.getElementById("inputVetor").value;
    const vetor = entrada.split(",").map(num => parseInt(num.trim()));

    if (vetor.length !== 10 || vetor.some(isNaN)) {
        alert("Erro: Por favor, insira 10 números inteiros válidos.");
        return null;
    }
    return vetor;
}

function imprimirDireto(v) {
    let resultado = "Ordem Direta: " + v.join(" - ");
    document.getElementById("saida").innerText = resultado;
}

function imprimirInverso(v) {
    let invertido = [...v].reverse();
    let resultado = "Ordem Inversa: " + invertido.join(" - ");
    document.getElementById("saida").innerText = resultado;
}

function executar(opcao) {
    const meuVetor = lerVetor(); 
    
    if (meuVetor) {
        if (opcao === 1) {
            imprimirDireto(meuVetor);
        } else {
            imprimirInverso(meuVetor);
        }
    }
}