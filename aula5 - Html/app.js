const express = require("express")
const handlebars = require("express-handlebars")
const app = express()
const porta = 3000

//CONFIGURANDO HANDLEBARS
app.engine('handlebars', handlebars.engine({extend:true})) //extend - quer dizer que quero utilizar toda configuração do handlebars
app.set('view engine', handlebars) //Define o mecanismo de visualização padrão como handlebars

//CRIANDO AS ROTAS
app.get("/", function(req, res){
    res.render('index.handlebars')
    //res.send("<h1>Bem vidno ao site!</h1>")
})

app.get("/about", function(req, res){
    let email = 'fulano@email.com'
    res.render('about.handlebars', {meuEmail:email})//iremos passar para a página HTML o conteúdo da variável 'email'
    //res.send("<h1>Bem vidno ao site!</h1>")
})
//EXECUTANDO O SERVIDOR
app.listen(porta, function(){
    console.log(`Servidor ativo na porta ${porta}.`)
})