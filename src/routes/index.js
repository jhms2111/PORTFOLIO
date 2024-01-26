const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const indexController = require('../controllers/index')

// rotas 
router.get('/', indexController.index)

//registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//lister 
router.get('/list', CustomersController.list)

//editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//remover
router.get('/remove/:id', CustomersController.remove)

// Nova rota para a página de contato
router.get('/contact', (req, res) => {
    // Lógica para a página de contato, renderizando um template, por exemplo
    res.render('contact'); // Supondo que você use um mecanismo de template como EJS, Pug, etc.
  });


module.exports = router