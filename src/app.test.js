import request from 'supertest';
import { it, expect, vi } from 'vitest';
import { app as server } from './app.js';

const app = request(server);

vi.spyOn(process, 'uptime').mockImplementation(() => 69420);

it('should be able to ping healthz end pint', async () => {
	const response = await app.get('/healthz');
	expect(response.status).toBe(200);
	expect(response.body).toStrictEqual({ message: 'ok', uptime: 69420 });
});
