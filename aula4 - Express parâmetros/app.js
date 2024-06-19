const express = require("express")
const app = express()
const porta = 3000

//CRIANDO ROTAS
app.get("/", (req, res)=>{ //=> cria uma relação do que é posto com o conteúdo
    res.send("Bem vindo!")
})

//ROTA COM PARÂMETRO, OU SEJA, UMA VARIÁVEL
app.get("/usuario/:nome", (req, res)=>{ //:nome - informa que o usuário vai por algum nome
    res.send(`Seja bem vindo ${req.params.nome}`) //req.params.nome} - pega o nome que foi posto na variável
})

//EXECUTANDO O SERVIDOR
app.listen(porta, function(){
    console.log(`Servidor na porta ${porta}`)
})
