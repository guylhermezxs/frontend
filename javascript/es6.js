const usuarios = [
  { nome: 'Marta', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Funções Lambda (Arrow Functions)

console.log('Percorrendo vetor: ')
usuarios.forEach(u =>
    console.log(`Nome: ${u.nome} tem ${u.idade} anos.`)
)

console.log('\n Filtrado por idade menor que 18 anos:')
const menorIdade = usuarios.filter((u) => u.idade < 18)
menorIdade.forEach(u =>
    console.log(`Nome: ${u.nome} tem ${u.idade} anos.`)
)

console.log('\nRetornando apenas nomes da lista: ')
const listaDeNomes = usuarios.map(u => u.nome)
listaDeNomes.forEach((nome , index) =>
    console.log(`${++index} º nome: ${nome}`)
)

console.log('\nEncontrar um usuário na listar: ')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Marta')
console.log(`Nome: ${usuarioEncontrado.nome} , idade: ${usuarioEncontrado.idade} , Empresa: ${usuarioEncontrado.empresa}`)

console.log('\n Somando todas as idades da lista: ')
const somaIdades = usuarios.reduce((soma, u) => soma + u.idade, 0)
console.log(`Soma: ${somaIdades}`)
