//verificação de preenchimento de login

//verificação de preenchimento de cadastro

//função para criar a lista de itens e guardar
var dadosLista = [];
function salvarUsuario(){
    let nomeUsuario = document.getElementById("nomeUser").value;

    if(nomeUsuario){
        dadosLista.push(nomeUsuario);
        criaLista();
        document.getElementById("nomeUser").value = ''
    }else{
        alert("Digite um nome!");
        document.getElementById('nomeUser').focus();
    }
}
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome usuário:</th><th>Ações:</ th></tr>";

    for(let i=0; i<= (dadosLista.length -1); i++){
        tabela += "<tr><td>" + dadosLista[i]  + "</td><td> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela; 
    }
}

//FUNÇÃO PARA EDIÇÃO DE NOME

function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)]; 
    dadosLista.splice(dadosLista[(i -1 )], 1);
}

//FUNÇÃO PARA EXCLUIR NOME

function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}

// FUNÇÃO PARA IR OUTRA TELA

function 