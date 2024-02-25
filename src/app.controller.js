import { NotFoundError } from './app.error.js';
import { app as appConfig } from './config/app.config.js';

export function healthCheckHandler(req, res, next) {
	return res.status(200).json({
		message: 'ok',
		uptime: process.uptime(),
	});
}

export function notFoundHandler(req, res, next) {
	throw new NotFoundError();
}

export function errorHandler(err, req, res, next) {
	const statusCode = err.statusCode ?? 500;
	const message = appConfig.env !== 'production' ? err.stack : err.message;
	return res.status(statusCode).json({ message });
}
