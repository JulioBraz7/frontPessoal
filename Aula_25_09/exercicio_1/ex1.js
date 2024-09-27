function verificarNota() {
    let nota = parseFloat(document.getElementById('nota').value);
    let resultado = document.getElementById('resultado');

    if (nota >= 6) {
        resultado.textContent = "Aprovado!";
    } else {
        resultado.textContent = "Reprovado!";
    }
}
