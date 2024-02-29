import { app } from './app.js';
import { app as appConfig } from './config/config.js';

const server = app.listen(appConfig.port, () => {
	console.log(`Server was started on http://localhost:${appConfig.port}`);
});

function gracefulShutdown() {
	console.log('Received kill signal, shutting down gracefully.');
	server.close(() => {
		console.log('HTTP server closed.');
		process.exit(0);
	});
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at: ', promise, ' reason: ', reason);
});
