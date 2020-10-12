const Corredor = require('../models/corredor.model');
const Produtos = require('../models/produtos.model');

async function Create({
	descricao,
	Identificador,
	tagRfid,
}) {
	try {
		const corredores = await Corredor.find({ active: true, descricao });
		// console.log(descricao);
		console.log(corredores);
	} catch (e) {
		console.log(e);
	}
}

async function Find() {
	return await Produtos.find({});
}

async function FindById(_id) {
	const produtos = await Produtos.findOne({ _id, active: true });
	return produtos;
}

module.exports = {
	Create,
	Find,
	FindById,
};
