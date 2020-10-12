import Corredor from '../models/corredor.model';

async function Create({ identificador, posicaoFinal, posicaoInicial }) {
	const corredor = new Corredor({
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

export default {
	Create,
	Find,
	FindByDescription,
};
