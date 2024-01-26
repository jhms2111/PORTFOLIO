const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()


//conexao com banco de dados 
db.connect()

// definindo template ingine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

// habilidade server para receber dados via post ( formulario)
app.use(express.urlencoded({ extended: true }))

// definindo as rotas 
app.use('/', routes)

// 404 error (not found)
app.use((req, res) => { //middleware
res.send('Pagina nao encontrada')
})

//executando o servidor 
const port = process.env.PORT || 8080 
app.listen(port, () => console.log(`Server is listening on port ${port}`))