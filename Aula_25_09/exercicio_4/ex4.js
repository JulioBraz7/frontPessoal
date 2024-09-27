function possuiHabilidadeJavaScript(habilidades) {
    return habilidades.includes("javascript");
}

// Exemplos de uso
console.log(possuiHabilidadeJavaScript(["html", "css", "javascript"])); // true
console.log(possuiHabilidadeJavaScript(["html", "css", "python"])); // false
