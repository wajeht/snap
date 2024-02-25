import { app as appConfig } from '../config/app.config.js';

export async function getIPAddress() {
	try {
		const response = await fetch('https://checkip.amazonaws.com');
		const data = await response.text();
		return data.trim();
	} catch (error) {
		console.error('Error fetching IP address:', error);
		throw error;
	}
}

// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export function isValidURL(str) {
	var pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$',
		'i',
	); // fragment locator
	return !!pattern.test(str);
}

export function addHttpsIfNeeded(domain) {
	if (!domain.startsWith('https://')) {
		return 'https://' + domain;
	}
	return domain;
}

// prettier-ignore
export const domain = appConfig.env !== 'production' ? `http://localhost:${appConfig.port}` : `${appConfig.domain}`;
