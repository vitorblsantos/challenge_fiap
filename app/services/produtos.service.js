const Corredor = require('../models/corredores.model');
const Produtos = require('../models/produtos.model');

async function Create({ descricao, tagRfid }) {
	if (!descricao) return 'Por favor, forneca uma descricao para o produto.';
	if (!tagRfid) return 'Por favor, forneca uma tag rfid para o produto.';
	try {
		const corredores = await Corredor.find({ active: true });
		const produtos = await Produtos.find({ active: true });
		let corredor,
			identificador,
			ocupacao = {};

		produtos.map(({ corredor }) => {
			if (ocupacao[corredor]) {
				ocupacao[corredor] += 1;
				return;
			}
			ocupacao[corredor] = 1;
		});

		corredores.map((el) => {
			if (!ocupacao[el.identificador] || ocupacao[el.identificador] > el.disponibilidade) return;
			corredor = el.identificador;
			identificador = ocupacao[el.identificador] + 1;
		});

		new Produtos({
			corredor,
			descricao,
			identificador,
			ocupacao,
			tagRfid,
		}).save();

		return {
			corredor,
			identificador,
		};
	} catch (e) {
		return `erro na API - ${e}`;
	}
}

async function Find() {
	return await Produtos.find({ active: true });
}
async function FindByTag({ tagRfid }) {
	const produtos = await Produtos.findOne({ tagRfid, active: true });
	return produtos;
}

async function Inactive({ tagRfid }) {
	return await Produtos.updateOne({ tagRfid }, { active: false });
}

module.exports = {
	Create,
	Find,
	FindByTag,
	Inactive,
};
