import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';

import { api } from './api/api.js';
import { rateLimitter } from './config/config.js';
import { postSnap } from './api/snap/snap.conroller.js';
import { catchAsyncErrors } from './app.middleware.js';
import { notFoundHandler, errorHandler, healthCheckHandler } from './app.controller.js';

const app = express();

app.use(rateLimitter);
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(process.cwd(), 'public')), { maxAge: '24h' }));

app.get('/', catchAsyncErrors(postSnap));
app.use('/api', api);
app.get('/healthz', healthCheckHandler);

app.use(notFoundHandler);
app.use(errorHandler);

export { app };
