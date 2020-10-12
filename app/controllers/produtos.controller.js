const Produtos = require('../services/produtos.service');

async function Create(req, res) {
	res.send(await Produtos.Create(req.body));
}

async function Find(req, res) {
	res.send(await Produtos.Find());
}

async function FindById(req, res) {
	res.send(await Produtos.FindById(req.params._id));
}

module.exports = {
	Create,
	Find,
	FindById,
};
