let tabela = document.getElementById('tabelaLista');
let totCadastrados = document.getElementById('totalCadastrados')
let totalF = document.getElementById('totalF')
let totalM = document.getElementById('totalM')
let totalSalarios = document.getElementById('totalSalarios')
let salF = document.getElementById('salF')
let salM = document.getElementById('salM')

let linha, coluna1, coluna2, coluna3;
let pessoas = [{
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

escondeMenu();

function escondeMenu(){    
    const img = document.querySelector('#iconMenu');
    const nav = document.querySelector('.menu');
    const atividade = document.querySelector('.atividade');

    img.addEventListener('click', function(){
        if(nav.style.display === 'block'){
            nav.style.display = 'none'
            atividade.style.width = '95vw';
        }else{
            nav.style.display = 'block'
            atividade.style.width = '85vw'; 
        }
    });
}
    
preencher();

function preencher(){
    pessoas.forEach(element => {
        linha   = tabela.insertRow(-1);

        coluna1 = linha.insertCell(0);
        coluna2 = linha.insertCell(1);
        coluna3 = linha.insertCell(2); 

        coluna1.innerHTML = element.nome;
        coluna2.style.cssText= 'text-align: center'
        coluna2.innerHTML = element.sexo;
        coluna3.innerHTML = moeda(Number(element.salario)); 
        
    });
    resumo();
}

function inserir(){
    const pessoa =  new Object();    
    pessoa.nome = document.getElementById('inputNome').value;
    const sexo = document.getElementsByName('sexo');   
    sexo[0].checked ? pessoa.sexo = "M" : pessoa.sexo = "F"     
    pessoa.salario = Number(document.getElementById('inputSalario').value);
    console.log(pessoa.salario)

        if(validaCampos(pessoa.nome, pessoa.salario)){            
            console.log(pessoa)
            pessoas.push(pessoa)

            linha   = tabela.insertRow(-1);
            
            coluna1 = linha.insertCell(0);
            coluna2 = linha.insertCell(1);
            coluna3 = linha.insertCell(2);    
            
            coluna1.innerHTML = pessoa.nome;
            coluna2.style.cssText= 'text-align: center'
            coluna2.innerHTML = pessoa.sexo;
            coluna3.innerHTML = moeda(Number(pessoa.salario));
            resumo()
        }          
}

function resumo(){
    totCadastrados.innerHTML = pessoas.length

    const pessoasFeminino = pessoas.filter((pessoa) =>{
        return pessoa.sexo == 'F'})
    totalF.innerHTML = pessoasFeminino.length

    const totSalF = pessoasFeminino.reduce((tot, next)=>{
        return tot + next.salario
    },0)
    salF.innerHTML = moeda(Number(totSalF))

    const pessoasMasculino = pessoas.filter((pessoa) =>{
        return pessoa.sexo == 'M'})
    totalM.innerHTML = pessoasMasculino.length

    const totSalM = pessoasMasculino.reduce((tot, next)=>{
        return tot + next.salario
    },0)
    salM.innerHTML = moeda(Number(totSalM))

    const totSalaraio = pessoas.reduce((tot, next)=>{
        return tot + next.salario
    },0)  
    
    totalSalarios.innerHTML = moeda(Number(totSalaraio))    
}

function validaCampos(nome, salario){
    if(!nome || !salario){
        alert('preencha os dados')
        return
    }else{
        return true
    }
}  

function moeda(valor){
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}