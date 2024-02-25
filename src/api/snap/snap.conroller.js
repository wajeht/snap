export async function postSnap(req, res) {
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