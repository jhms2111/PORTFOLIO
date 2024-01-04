const express = require('express')
const path = require('path')

const app = express()


// definindo template ingine
app.set('view engine', 'ejs')

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

// habilidade server para receber dados via post ( formulario)
app.use(express.urlencoded({ extended: true }))

// rotas 
app.get('/',(req, res) => {
    res.render('index', {
        title:'Titulo teste'
    })
})

// 404 error (not found)
app.use((req, res) => { //middleware
res.send('Pagina nao encontrada')
})

//executando o servidor 
const port = process.env.PORT || 8080 
app.listen(port, () => console.log(`Server is listening on port ${port}`))