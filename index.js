const express = require('express');
const app = express();

//ROTA1
app.get("/",function(req,res){
    res.send("Bem vindo ao meu site");
})
//ROTA2
app.get("/produtos",function(req,res){
    res.send("<h1>Lista de Produtos<h1>");
})
//Rota com parametro
app.get("/consulta/:parametro",function(req,res){
    res.send("retorno consulta:"+req.params.parametro);
})
app.listen(4000, '0.0.0.0', function(erro) {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor iniciado.");
    }
});
