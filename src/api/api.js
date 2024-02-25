import { snap } from './snap/snap.router.js';

import express from 'express';
const api = express.Router();

api.use('/snap', snap)

export { api };
