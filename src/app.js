import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/healthz', (req, res) => {
	res.status(200).json({
		message: 'ok',
		uptime: process.uptime(),
	});
});

export { app };
