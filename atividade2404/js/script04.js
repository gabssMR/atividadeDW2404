function somaPares() {
    const numero = parseInt(document.getElementById('numero').value);
    let soma = 0;

    for (let i = 2; i <= numero; i += 2) {
        soma += i;
    }

    document.getElementById('resultado').innerHTML = `Soma dos números pares: ${soma}`;
}
