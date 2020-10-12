import { Router } from 'express';
import wrap from 'express-async-handler';

import Produtos from '../controllers/produtos.controller';

const router = Router();

router.get('/', wrap(Produtos.Find));
router.get('/:id', wrap(Produtos.FindById));
router.post('/', wrap(Produtos.Create));

export default router;
