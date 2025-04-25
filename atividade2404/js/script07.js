function isPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    let primos = [];

    for (let i = inicio; i <= fim; i++) {
        if (isPrimo(i)) {
            primos.push(i);
        }
    }

    document.getElementById('resultado').innerHTML = `Números primos entre ${inicio} e ${fim}: ${primos.join(', ')}`;
}
