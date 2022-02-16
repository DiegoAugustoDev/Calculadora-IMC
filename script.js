function calcular(i){
    let nome = document.getElementById("nome").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value/100

    let imc = (peso /altura**2).toFixed(1)

    let classificacao = ""

    if (imc <18.5){
        classificacao = "você está abaixo do peso"
    }

    else if (imc >=18.5 && imc <=24.9){
        classificacao = "você está no peso ideal"
    }

    else if (imc >=25 && imc <=29.9 ){
        classificacao = " você está com sobrepeso"
    }

    else if (imc >=30 && imc <=34.9){
        classificacao = "você está com obesidade grau 1"
    }

    else if (imc >=35 && imc <=39.9){
        classificacao = "você está com obesidade grau 2"
    }

    else if (imc >=40){
        classificacao = "você está com obesidade grau 3"
    }

  


    let h2 = document.getElementById("mostrarResultado")
    h2.innerText = `${nome},seu imc é ${imc} . ${classificacao}`
}