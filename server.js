import 'dotenv/config';

import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routes from './app/routes';

const app = express();
const mongoUrl = process.env.MONGO_URL || false;
app.disable('x-powered-by');

app.use(cors());
app.use(json());

app.use('/', routes);

if (!mongoUrl) console.error('Please, provide one connection string');

mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

mongoose.connection.on('error', console.error.bind(console, 'Mongoose connection error:'));

mongoose.connection.on('connected', () => {
	app.listen(process.env.APP_PORT || 3000, function () {
		console.info(`Server listen on port: ${process.env.APP_PORT}`);
	});
});
