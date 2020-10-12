const Corredor = require('../services/corredor.service');

async function Create(req, res) {
	res.send(await Corredor.Create(req.body));
}

async function Find(req, res) {
	res.send(await Corredor.Find());
}

async function FindByDescription(req, res) {
	res.send(await Corredor.FindByDescription(req.params.identificador));
}

module.exports = {
	Create,
	Find,
	FindByDescription,
};
