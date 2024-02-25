import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import { api } from './api/api.js';
import { rateLimitter } from './config/rate-limiter.config.js';
import { postSnap } from './api/snap/snap.conroller.js';
import { catchAsyncErrors } from './api/api.middleware.js';
import { NotFoundError } from './app.error.js';

const app = express();

app.use(rateLimitter);
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', catchAsyncErrors(postSnap));
app.use('/api', api);
app.get('/healthz', (req, res) => res.status(200).json({ message: 'ok' }));

app.use((req, res, next) => {
	throw new NotFoundError();
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode ?? 500;
	res.status(statusCode).json({ message: err.message });
});

export { app };
