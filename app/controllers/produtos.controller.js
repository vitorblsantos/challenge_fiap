import Produtos from '../services/produtos.service';

async function Create(req, res) {
	res.send(await Produtos.Create(req.body));
}

async function Find(req, res) {
	res.send(await Produtos.Find());
}

async function FindById(req, res) {
	res.send(await Produtos.FindById(req.params._id));
}

export default {
	Create,
	Find,
	FindById,
};
