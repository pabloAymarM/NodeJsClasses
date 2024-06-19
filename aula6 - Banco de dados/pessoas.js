const sequelizeOrm = require("sequelize")
//PRECISAMOS PASSAR OS SEGUINTES DADOS:
const sequelizeDados = new sequelizeOrm('pessoas', 'root', '', { //nome do BD, nomme do usuário, senha(o banco não possui senhas) e confiurações 
    dialect:'sqlite', //linguagem usada no BD
    storage:'./pessoas.sqlite' //nome do arquivo
})

//CRIANDO A TABELA NO BANCO DE DADOS E OS CAMPOS
const pessoasTabela = sequelizeDados.define('pessoas_tb', { //sequelizeDados porque ele está recebendo toda configuração do banco
    nome:{type:sequelizeOrm.STRING}, //STRING = VARCHAR
    idade:{type:sequelizeOrm.INTEGER},
    email:{type:sequelizeOrm.STRING}
})

//EXECUTANDO A CRIAÇÃO DA TABELA
//pessoasTabela.sync()
//INSERINDO DADOS NA TABELA
let inserirDados = async function(){ //async porque a função é assincrona
    let resultado = await pessoasTabela.create({
        nome:"Pablo Aymar",
        idade:17,
        email:"pablomdocarmo@gmail.com"
    })
    console.log("Dados inseridos com sucesso!")
}

//CONSULTAR DADOS DA TABELA
let consultarDados = async function(){
    let resultado = await pessoasTabela.findAll()
    console.log(resultado)
}

//DELETAR DADOS DA TABELAS
let deletarDados = async function(){
    let resultado = await pessoasTabela.destroy({
        where: {id:6}
    })
    console.log("Item apagado com sucesso!")
}

deletarDados()
//consultarDados()
//inserirDados()