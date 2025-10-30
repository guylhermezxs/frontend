// Criando um vetor.

const frutas = ['maçã', 'banana', 'laranja', 'uva'];

console.log('\nExibindo o vetor de frutas:');
console.log(frutas);

console.log('\n Exibindo apenas a primeira fruta do vetor:');
console.log(frutas[0]);

console.log('\n Adicionando uma nova fruta ao vetor:');
frutas.push('manga');
console.log(frutas);

console.log('\n Removendo o primeiro elemento do vetor:');
frutas.shift();
console.log(frutas);

console.log('\n Removendo o último elemento no vetor:');
frutas.pop();
console.log(frutas);