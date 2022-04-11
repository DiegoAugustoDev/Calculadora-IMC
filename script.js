let btn = document.getElementById("btn")
let peso = document.getElementById("peso")
let altura = document.getElementById("altura")


btn.addEventListener("click", function(){

    if(altura.value != "" && peso.value != ""){
        let imc = (peso.value/altura.value**2).toFixed(1)
        let classificacao = ""


        if(imc <18.5){
            classificacao = "você está a baixo do peso"
        }
    
       if(imc >= 18.5 && imc <24.9){
            classificacao = "você está no peso ideal"
        }
    
        if(imc >=25 && imc <= 29.9){
            classificacao = "você está com sobrepeso"
        }
    
        if(imc >=30 && imc <= 34.9){
            classificacao = "você está com obesidade grau 1"
        }
    
        if(imc >35 && imc <= 39.9){
            classificacao = "você está com obesidade grau 2"
        }
    
      if(imc >=40){
          classificacao = "você está com obesidade grau 3"
      }

         let result = document.getElementById("resultado")
         result.innerHTML = `IMC: ${imc} (${classificacao})`
    }
    else{
        result.innerHTML = "Preencha os campos"
    }
})  
