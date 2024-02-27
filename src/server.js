import { app } from './app.js';
import { app as appConfig } from './config/config.js';

app.listen(appConfig.port, () => {
	console.log(`Server was started on http://localhost:${appConfig.port}`);
});
