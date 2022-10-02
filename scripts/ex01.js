const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
    {
    nome: 'Silva Joice Castro',
    sexo: 'F',
    salario: 3350.25,
    },
    ];

//1. Imprima no console a quantidade de pessoas Total.   
document.write(`A quantidade de pessoas: ${data.length}`)

//2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
const dataFeminino = data.filter((pessoa) =>{
    return pessoa.sexo == 'F'})
document.write(`<p>A quantidade de pessoas do sexo feminino é: ${dataFeminino.length}`)

//3. Imprima no console a soma do salário de todas as pessoas.
const totSalaraio = data.reduce((tot, next)=>{
    return tot + next.salario
},0)  

document.write(`<p>A Soma dos salários é: ${moeda(totSalaraio)}`)

//4. Imprima no console a soma do salario de todos as pessoas do sexo Masculino
const dataMasculino = data.filter((pessoa) =>{
    return pessoa.sexo == 'M'
})

const totSalarioMasc = dataMasculino.reduce((tot, next)=>{
    return tot + next.salario
},0)
document.write(`<p>O total dos sálarios masculino é: ${moeda(totSalarioMasc)}`)

/**
5. Utilize a função Some, para descobrir se existe algum salário 
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso. */
const sup7K = data.some((pessoa)=>{
    return pessoa.salario > 7000;
})
document.write(`<p>No vetor existe alguem que ganha mais de 7k: ${sup7K}`);
/**
6. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.*/
const evaTrindade = data.findIndex((pessoa)=>{
    return pessoa.nome == 'Eva Trindade'
})
document.write(`<p>A posição no vetor da Eva Trindade é: ${evaTrindade}`)
/**
7. Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva".*/
const silva = data.filter((pessoa)=>{
    return pessoa.nome.includes('Silva',1)
})

for (const key in silva) {
    document.write(`<p>${silva[key].nome}`)
}

//8. Imprima os nomes utilizando o MAP
const dataNomes = data.map( (pessoa) =>{
    const dataMapeado = {
        nome: pessoa.nome,
    }
    return dataMapeado;
});

for (const key in dataNomes) {
    document.write(`<p>${dataNomes[key].nome}`)
}

function moeda(valor){
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
