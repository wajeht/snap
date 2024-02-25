import express from 'express';

const app = express();

app.get('/health/z', function (req, res) {
	return res.json({
		message: 'ok',
		uptime: process.uptime(),
	});
});

export { app };
