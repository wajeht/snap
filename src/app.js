import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import { api } from './api/api.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.get('/healthz', (req, res) => res.status(200).json({ message: 'ok' }));

app.use((req, res, next) => res.status(404).json({ message: 'not found!' }));
app.use((err, req, res, next) => res.status(500).json({ message: 'error!' }));

export { app };
