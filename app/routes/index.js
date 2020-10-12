import express from 'express';

import Corredor from './corredor.route';
import Produtos from './produtos.route';

const router = express.Router();

router.get('/', function (req, res) {
	res.send('alive');
});

router.use('/corredor', Corredor);
router.use('/produtos', Produtos);

export default router;
