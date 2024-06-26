import './setup-dotenv.js';

export const app = {
	port: process.env.PORT || 80,
	env: process.env.NODE_ENV || 'development',
	domain: process.env.DOMAIN,
	myIp: process.env.MY_IP,
};
