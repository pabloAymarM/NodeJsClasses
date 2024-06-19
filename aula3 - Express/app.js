const express = require("express") //carregando o módulo
const app = express()

//CRIANDO ROTAS PARA ACESSAR O SERVIDOR
app.get("/", function(req, res){ //require é requisição, ou seja, ele requisita algo do servidor //res é resposta
    res.send("<h1>Bem vindo ao site!</h1>") //send é enviar uma resposta //enviar a resposta
})

app.get("/sobre", function(req, res){
    res.send("<h1>Saiba mais sobre nós!</h1>")
})

app.get("/usuario", function(req, res){
    res.send("<h1>Bem vindo usuário!</h1>")
})

//EXECUTANDO O SERVIDOR
app.listen(3000, function(){ //3000 é o número da porta do servidor
    console.log("Servidor ativo!")
})