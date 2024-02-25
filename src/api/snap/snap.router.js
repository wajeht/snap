import express from 'express';
const snap = express.Router();

import { getSnap, getAllSnap, postSnap, deleteSnap, patchSnap } from './snap.conroller.js';

snap.post('/', postSnap);
snap.get('/', getAllSnap);
snap.get('/:id', getSnap);
snap.patch('/:id', patchSnap);
snap.delete('/:id', deleteSnap);

export { snap };
