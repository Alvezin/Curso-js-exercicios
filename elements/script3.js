class Pessoa{
    constructor(nome, sobrenome, idade, cidade, ){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade,
        this.cidade = cidade
    }
}

function submit(){
    const textarea = document.getElementById('textarea');
    textarea.innerHTML = '';
    const inputNome = document.getElementById('nome').value;
    const inputSobrenome = document.getElementById('sobrenome').value;
    const inputIdade = Number(document.getElementById('idade').value);
    const inputCidade = document.getElementById('cidade').value;
    
    
    const pessoa = new Pessoa(inputNome, inputSobrenome, inputIdade, inputCidade)
    
    
    function checar(objeto){
        for (itens in objeto){
            console.log(`${itens}: ${objeto[itens]}`)
            const lista = document.createElement('li')
            lista.textContent =`${itens}: ${objeto[itens]}`
            textarea.appendChild(lista)

        }
    }
    checar(pessoa)
    
}


