import { app as appConfig } from '../config/app.config.js';

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

export const domain =
	appConfig.env !== 'production' ? `http://localhost:${appConfig.port}` : `${appConfig.domain}`;
