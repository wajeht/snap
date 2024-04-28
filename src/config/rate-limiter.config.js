import { rateLimit as rl } from 'express-rate-limit';
import { app as appConfig } from '../config/app.config.js';
import { getIPAddress } from '../utils/utils.js';

export async function skipOnMyIp(_req, _res) {
	const myIp = await getIPAddress();
	const myIpWasConnected = myIp === appConfig.myIp;
	if (myIpWasConnected) console.log(`my ip was connected: ${myIp}`);
	return myIpWasConnected;
}

export const rateLimiter = rl({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
	skip: skipOnMyIp,
	message: (req, res) => {
		return res.json({
			message: 'Too many requests, please try again later?',
		});
	},
});
