import express from 'express';
import routes from './routes/index.mjs';
import bodyParser from 'body-parser';

const myArgs = process.argv.slice(2);
const props = myArgs.reduce((acc, arg) => {
	const [name, value] = arg.split('=');
	return {
		...acc,
		[name]: value,
	};
}, {});

// App
const app = express();

app.use(bodyParser.json());

// Set port
const port = props['--port'] || '1337';
app.set('port', port);

app.use('/api/', routes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
