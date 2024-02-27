import request from 'supertest';
import { it, expect, vi } from 'vitest';
import { app as server } from './app.js';

const app = request(server);

vi.spyOn(process, 'uptime').mockImplementation(() => 69420);

it('should be able to ping healthz end point', async () => {
	const response = await app.get('/healthz');
	expect(response.status).toBe(200);
	expect(response.body).toStrictEqual({
		message: 'ok',
		uptime: 69420,
		statusCode: 200,
		success: true,
		originalUrl: '/healthz',
	});
});

it('should be able to get not found end pint', async () => {
	const response = await app.get('/not-found');
	expect(response.status).toBe(404);
	expect(response.body.message).include('Error: Not Found');
});
