const { Router } = require('express');
const wrap = require('express-async-handler');

const Produtos = require('../controllers/produtos.controller.js');

const router = Router();

router.get('/', wrap(Produtos.Find));
router.get('/tag/:tagRfid', wrap(Produtos.FindByTag));
router.post('/', wrap(Produtos.Create));
router.put('/tag/:tagRfid', wrap(Produtos.Inactive));

module.exports = router;
