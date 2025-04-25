function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (cpf.length !== 11 || /(\d)\1{10}/.test(cpf)) {
        document.getElementById('resultado').innerHTML = "CPF inválido!";
        return;
    }

    let soma = 0;
    let resto;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf[9])) {
        document.getElementById('resultado').innerHTML = "CPF inválido!";
        return;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf[10])) {
        document.getElementById('resultado').innerHTML = "CPF inválido!";
    } else {
        document.getElementById('resultado').innerHTML = "CPF válido!";
    }
}
