import { NotFoundError } from './app.error.js';
import { app as appConfig } from './config/config.js';

export function healthCheckHandler(req, res, _next) {
	return res.status(200).json({
		message: 'ok',
		uptime: process.uptime(),
	});
}

export function notFoundHandler(_req, _res, _next) {
	throw new NotFoundError();
}

export function errorHandler(err, req, res, _next) {
	const statusCode = err.statusCode ?? 500;
	const message = appConfig.env !== 'production' ? err.stack : err.message;
	return res.status(statusCode).json({ message });
}
