import './setup-dotenv.js';

export const app = {
	port: process.env.PORT || 8080,
	env: process.env.NODE_ENV || 'development',
	domain: process.env.DOMAIN,
};
