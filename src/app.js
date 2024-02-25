import { api } from './api/api.js'
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.get('/healthz', (req, res) => res.status(200).json({ message: 'ok' }));

app.use((req, res, next) => res.status(404).json({ message: 'nod found!' }));
app.use((err, req, res, next) => res.status(500).json({ message: 'error!' }));

export { app };
