const { Router } = require('express');
const wrap = require('express-async-handler');

const Corredor = require('../controllers/corredor.controller.js');

const router = Router();

router.get('/', wrap(Corredor.Find));
router.get('/:identificador', wrap(Corredor.FindByDescription));
router.post('/', wrap(Corredor.Create));

module.exports = router;
