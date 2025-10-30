// Função

function calcular(simbolo,a, b) {
    if(simbolo == '+'){
        return a + b;
    } else if (simbolo == '-'){
        return a - b;
    } else if (simbolo == '*'){
        return  a * b;
    } else if(simbolo == '/'){
        return a / b;
    }
        
}

const resultado = calcular('+', a , b)

console.log(`Resultado: ${soma}`)