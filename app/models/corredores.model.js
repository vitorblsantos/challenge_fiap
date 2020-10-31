const { model, Schema } = require('mongoose');

const Corredor = new Schema({
	active: {
		default: true,
		type: Boolean,
	},
	createdAt: {
		default: Date.now,
		type: Date,
	},
	disponibilidade: {
		type: Number,
	},
	identificador: {
		required: true,
		type: String,
		unique: true,
	},
});

module.exports = model('Corredores', Corredor);
