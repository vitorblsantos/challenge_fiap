require('dotenv/config');

const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./app/routes/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.disable('x-powered-by');

app.use(cors());
app.use(json());

app.use('/', routes);

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

mongoose.connection.on('error', console.error.bind(console, 'Mongoose connection error:'));

mongoose.connection.on('connected', () => {
	app.listen(port, () => {
		console.log(`App running on port: ${port}`);
	});
});
