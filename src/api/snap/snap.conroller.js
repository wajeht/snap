import { ValidationError, UnimplementedFunctionError } from '../../app.error.js';
import { domain, isValidURL, addHttpsIfNeeded } from '../../utils/utils.js';
import { screenshot } from '../../utils/screenshot.util.js';

export async function postSnap(req, res) {
	let url = req.query.url;

	if (url === undefined) {
		throw new ValidationError(`Please call via ${domain}/?url=<domain>`);
	}

	if (!isValidURL(url)) {
		throw new ValidationError('invalid url');
	}

	url = addHttpsIfNeeded(url);

	const captured = await screenshot(url);

	return res.status(200).json({
		message: 'ok',
		data: captured,
	});
}

export async function getSnap(_req, _res) {
	throw new UnimplementedFunctionError();
}

export async function getAllSnap(_req, _res) {
	throw new UnimplementedFunctionError();
}

export async function patchSnap(_req, _res) {
	throw new UnimplementedFunctionError();
}

export async function deleteSnap(_req, _res) {
	throw new UnimplementedFunctionError();
}
