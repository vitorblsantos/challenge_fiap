import { Router } from 'express';
import wrap from 'express-async-handler';

import Corredor from '../controllers/corredor.controller';

const router = Router();

router.get('/', wrap(Corredor.Find));
router.get('/:identificador', wrap(Corredor.FindByDescription));
router.post('/', wrap(Corredor.Create));

export default router;
