//verificação de preenchimento de login
function Verifica(){
    let user = document.getElementById('email').value;
    let senha = document.getElementById('subject').value;

    if(!user || !senha){
        alert("Por favor preencha todos os campos obrigatórios!");
    } else{
        window.location.href = "compras.html";
    }
}

//função para criar a lista de itens e guardar
var dadosLista = [];
function salvarUsuario(){
    let nomeUsuario = document.getElementById("nomeUser").value;

    if(nomeUsuario){
        dadosLista.push(nomeUsuario);
        criaLista();
        document.getElementById("nomeUser").value = '';
    }
}
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML;

    for(let i=0; i<= (dadosLista.length -1); i++){
        tabela += "<tr><td>" + dadosLista[i]  + "</td><td> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela; 
    }
}

//FUNÇÃO PARA EDIÇÃO DE NOME

function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)]; 
    dadosLista.splice(dadosLista[(i -1)], 1);
    document.getElementById("tabela").deleteRow(i);
}

//FUNÇÃO PARA EXCLUIR NOME

function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}

// FUNÇÃO PARA IR PARA OUTRA TELA

function irTela(){
    
}