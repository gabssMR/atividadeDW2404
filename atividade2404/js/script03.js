function informaIdade(){
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    if (isNaN(idade)){
        resultado.innerHTML += "Digite um número válido";
    } else if(idade >= 0 && idade <= 12){
        resultado.innerHTML += "Criança";
    } else if(idade >= 13 && idade <= 18){
        resultado.innerHTML += "Adolescente"
    } else if(idade > 18 && idade < 60){
        resultado.innerHTML += "Adulto"
    } else{
        resultado.innerHTML += "Idoso"
    }

}