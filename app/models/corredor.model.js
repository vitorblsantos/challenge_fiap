const { model, Schema } = require('mongoose');

const Corredor = new Schema({
	active: {
		type: Boolean,
		default: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	identificador: {
		type: String,
		required: true,
		unique: true,
	},
	posicaoFinal: {
		type: String,
	},
	posicaoInicial: {
		type: String,
	},
});

module.exports = model('Corredor', Corredor);
