function verificarNumero() {
    let idade = window.prompt("Insira a idade");
    let resultado = document.getElementById('resultado');

    if (idade>=10) {
        resultado.textContent = "Acesso permitido!";
    } else {
        resultado.textContent = "Acesso negado!";
    }

    //   var resultado = window.prompt(resultado);
}
