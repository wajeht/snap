import { app } from './app.js';
import { app as appConfig } from './config/app.config.js';

app.listen(() => {
	console.log(`Server is listening on http://localhost:${appConfig.port}`);
});
