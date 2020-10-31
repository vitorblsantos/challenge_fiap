const Produtos = require('../services/produtos.service');

async function Create(req, res) {
	res.send(await Produtos.Create(req.body));
}

async function Find(req, res) {
	res.send(await Produtos.Find());
}

async function FindByTag(req, res) {
	res.send(await Produtos.FindByTag(req.params));
}

async function Inactive(req, res) {
	res.send(await Produtos.Inactive(req.params));
}

module.exports = {
	Create,
	Find,
	FindByTag,
	Inactive,
};
