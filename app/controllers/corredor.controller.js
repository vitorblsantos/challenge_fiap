import Corredor from '../services/corredor.service';

async function Create(req, res) {
	res.send(await Corredor.Create(req.body));
}

async function Find(req, res) {
	res.send(await Corredor.Find());
}

async function FindByDescription(req, res) {
	res.send(await Corredor.FindByDescription(req.params.identificador));
}

export default {
	Create,
	Find,
	FindByDescription,
};
