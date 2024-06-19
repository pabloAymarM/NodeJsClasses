const express = require("express")
const app = express()
porta = 3000

app.get("/", function(req, res){
    res.send("Seja bem vindo! :)")
})

app.listen(porta, function(){
    console.log(`Servidor ativo na porta ${porta}.`)
})