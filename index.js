const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express
const PORT = process.env.PORT ?? 4000;

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site novamente! alteracao nova</h1>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos update versao 3!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
    
})

app.listen(PORT, "0.0.0.0", function (erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado na porta " + PORT);
    }
});

