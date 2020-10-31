const express = require('express');

const Corredores = require('./corredores.route.js');
const Produtos = require('./produtos.route.js');

const router = express.Router();

router.get('/', function (req, res) {
	res.send('alive');
});

router.use('/corredores', Corredores);
router.use('/produtos', Produtos);

module.exports = router;
