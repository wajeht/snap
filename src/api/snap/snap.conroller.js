import path from 'path';
import { ValidationError, UnimplementedFunctionError } from '../../app.error.js';
import { domain, isValidURL, addHttpsIfNeeded, screenshot } from '../../utils/utils.js';

export async function postSnap(req, res) {
	// called via `http://localhost:${PORT}/`
	if (req.path === '/') {
		const { url, size, quality, download } = req.query;

		if (url === undefined) {
			throw new ValidationError(`Please call via ${domain}/?url=<domain>`);
		}

		if (!isValidURL(url)) {
			throw new ValidationError('invalid url');
		}

		// should filter adult websites

		// should use job queue, this will hang requests
		const captured = await screenshot({
			url: addHttpsIfNeeded(url),
			quality,
			size,
		});

		if (download === 'true') {
			return res.download(path.resolve(path.join(process.cwd(), 'public', captured.path)));
		}

		return res.status(307).redirect(captured.path);
	}

	throw new UnimplementedFunctionError();
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
