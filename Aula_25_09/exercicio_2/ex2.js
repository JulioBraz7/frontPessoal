function verificarNumero() {
    let numero = window.prompt("Insira um numero");
    let resultado = document.getElementById('resultado');

    if (numero % 2 == 0) {
        resultado.textContent = "É par!";
    } else {
        resultado.textContent = "É ímpar!";
    }

    //   var resultado = window.prompt(resultado);
}
