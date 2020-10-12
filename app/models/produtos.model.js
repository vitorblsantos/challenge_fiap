const { model, Schema } = require('mongoose');

const Produtos = new Schema({
	active: {
		type: Boolean,
		default: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	corredor: {
		type: String,
		required: true,
	},
	descricao: {
		type: String,
		required: true,
	},
	tagRfid: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model('Produtos', Produtos);
