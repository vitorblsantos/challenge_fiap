const Corredor = require('../models/corredores.model');

async function Create({ disponibilidade, identificador, posicaoFinal, posicaoInicial }) {
	const corredor = new Corredor({
		disponibilidade,
		identificador,
		posicaoFinal,
		posicaoInicial,
	}).save();

	return corredor;
}

async function Find() {
	return await Corredor.find({});
}

async function FindByDescription(identificador) {
	let teste = Corredor.find({ identificador });
	return teste;
}

module.exports = {
	Create,
	Find,
	FindByDescription,
};
