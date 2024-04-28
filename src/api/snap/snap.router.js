import express from 'express';
const snap = express.Router();

import { getSnap, getAllSnap, postSnap, deleteSnap, patchSnap } from './snap.controller.js';
import { catchAsyncErrors } from '../../app.middleware.js';

snap.post('/', catchAsyncErrors(postSnap));
snap.get('/', catchAsyncErrors(getAllSnap));
snap.get('/:id', catchAsyncErrors(getSnap));
snap.patch('/:id', catchAsyncErrors(patchSnap));
snap.delete('/:id', catchAsyncErrors(deleteSnap));

export { snap };
