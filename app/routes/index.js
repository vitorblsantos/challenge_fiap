const express = require('express');

const Corredor = require('./corredor.route.js');
const Produtos = require('./produtos.route.js');

const router = express.Router();

router.get('/', function (req, res) {
	res.send('alive');
});

router.use('/corredor', Corredor);
router.use('/produtos', Produtos);

module.exports = router;
