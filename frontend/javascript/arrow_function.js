// Arrow function
// Faça uma função:
// Subtrair , Multiplicar , Dividir



const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b === 0){
        console.log("Não e permitido divisão por 0")
    }
    return a / b
}

const resultado = dividir (2,0)

