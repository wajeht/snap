import { ValidationError } from '../../app.error.js';
import { domain, isValidURL } from '../../utils/utils.js';

export async function postSnap(req, res) {
	const url = req.query.url;

	if (url === undefined) {
		throw new ValidationError(`Please call via ${domain}`)
	}

	if (!isValidURL(url)) {
		throw new ValidationError('invalid url');
	}

	return res.status(200).json({
		message: 'postSnap()',
	});
}

export async function getSnap(req, res) {
	return res.status(200).json({
		id: req.params.id,
		message: 'getSnap()',
	});
}

export async function getAllSnap(req, res) {
	return res.status(200).json({
		message: 'getAllSnap()',
	});
}

export async function patchSnap(req, res) {
	return res.status(200).json({
		id: req.params.id,
		message: 'patchSnap()',
	});
}

export async function deleteSnap(req, res) {
	return res.status(200).json({
		id: req.params.id,
		message: 'deleteSnap()',
	});
}
