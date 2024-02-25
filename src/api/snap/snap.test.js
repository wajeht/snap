import request from 'supertest';
import { it, expect } from 'vitest';
import { app as server } from '../../app.js';

const app = request(server);

it('should be able to call /api/snap', async () => {
	const response = await app.post('/api/snap');
	expect(response.status).toBe(422);
	expect(response.body.message).include('Error: Please call via');
});
