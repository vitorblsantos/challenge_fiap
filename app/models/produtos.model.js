const { model, Schema } = require('mongoose');

const Produtos = new Schema({
	active: {
		default: true,
		type: Boolean,
	},
	createdAt: {
		default: Date.now,
		type: Date,
	},
	corredor: {
		required: true,
		type: String,
	},
	descricao: {
		required: true,
		type: String,
	},
	identificador: {
		required: true,
		type: Number,
	},
	tagRfid: {
		required: true,
		type: String,
		unique: true,
	},
	updatedAt: {
		default: Date.now,
		type: Date,
	},
});

module.exports = model('Produtos', Produtos);
