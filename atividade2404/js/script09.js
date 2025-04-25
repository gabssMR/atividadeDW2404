function converterTempo() {
    const horas = parseInt(document.getElementById('horas').value);
    const minutos = horas * 60;
    const segundos = horas * 3600;

    document.getElementById('resultado').innerHTML = `${horas} hora(s) é igual a ${minutos} minutos ou ${segundos} segundos.`;
}
