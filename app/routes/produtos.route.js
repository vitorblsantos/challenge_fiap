const { Router } = require('express');
const wrap = require('express-async-handler');

const Produtos = require('../controllers/produtos.controller.js');

const router = Router();

router.get('/', wrap(Produtos.Find));
router.get('/:id', wrap(Produtos.FindById));
router.post('/', wrap(Produtos.Create));

module.exports = router;
