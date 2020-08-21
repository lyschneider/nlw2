// Servidor
const express = require('express')  //express é uma função
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, saveForm} = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Início e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) //.use é configuracao do servidor
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/save-form", saveForm)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)