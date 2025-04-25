let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinhar() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const resultado = document.getElementById('resultado');
    
    if (palpite === numeroAleatorio) {
        resultado.innerHTML = "Parabéns! Você acertou!";
    } else if (palpite < numeroAleatorio) {
        resultado.innerHTML = "O número é maior. Tente novamente!";
    } else {
        resultado.innerHTML = "O número é menor. Tente novamente!";
    }
}
