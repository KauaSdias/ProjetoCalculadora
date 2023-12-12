let display = document.getElementById("display")
let numeroDoDisplay = 0
let valor1 = 0
let valor2 = 0
let conta = 0


//Definindo o número do display
function numero(number){
    if (numeroDoDisplay === 0){
        numeroDoDisplay = String(number)
    } else{
        numeroDoDisplay += String(number)
    }

    display.textContent = numeroDoDisplay
}

//Resta o primeiro número e adiciona um valor em operação (op)
function operacao(op){
    valor1 = parseInt(numeroDoDisplay)
    numeroDoDisplay = 0

if(op === 0){
    conta = '+'
}   else if(op === 1){
    conta = '-'
}   else if(op === 2){
    conta = '*'
}   else if(op === 3){
    conta = '/'
}

}

//Função que armazena o segundo valor e faz a conta.
function igual(){
    valor2 = parseInt(numeroDoDisplay)
  

    if(conta === '+'){
        numeroDoDisplay = Number(valor1 + valor2)
    } else if(conta === '-'){
        numeroDoDisplay = Number(valor1 - valor2)
    } else if(conta === '*'){
        numeroDoDisplay = Number(valor1 * valor2)
    } else if(conta === '/'){
        numeroDoDisplay = Number(valor1 / valor2)
    }



    display.textContent = numeroDoDisplay
}

//Zerar o display com o botão CE
function zerar(){
    valor1 = 0
    valor2 = 0
    conta = 0
    numeroDoDisplay = 0

    display.textContent = numeroDoDisplay
}