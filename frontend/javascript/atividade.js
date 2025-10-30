// Vetor de números

const numeros = [1,2,3,4,5]
const numeroMultiplicacao = 50

const multiplicar = numeros.map(n => n*numeroMultiplicacao )
console.log(`\nNúmeros multiplicados por ${numeroMultiplicacao}` )
multiplicar.forEach((n , index) =>
    console.log(`${++index} x ${numeroMultiplicacao} = ${n}`)
)


const par = numeros.filter(n => n % 2 === 0)
console.log('\nNúmeros Pares:')
par.forEach(p => {
    console.log(`${p}`)
});

const somaNumero = numeros.reduce((soma , n) => soma + n , 0)
console.log('\nNúmeros soma: ')
console.log(`${somaNumero}`)

