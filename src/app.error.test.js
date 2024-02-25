import { describe, it, expect } from 'vitest';
import {
	ForbiddenError,
	UnauthorizedError,
	NotFoundError,
	ValidationError,
	UnimplementedFunctionError,
} from './app.error.js';

describe('Custom Http Errors', () => {
	it('ForbiddenError should have status code 403 and default message', () => {
		const error = new ForbiddenError();
		expect(error.statusCode).toBe(403);
		expect(error.message).toBe('Forbidden');
	});

	it('ForbiddenError should allow custom message', () => {
		const customMessage = 'Custom Forbidden Message';
		const error = new ForbiddenError(customMessage);
		expect(error.statusCode).toBe(403);
		expect(error.message).toBe(customMessage);
	});

	it('UnauthorizedError should have status code 401 and default message', () => {
		const error = new UnauthorizedError();
		expect(error.statusCode).toBe(401);
		expect(error.message).toBe('Unauthorized');
	});

	it('UnauthorizedError should allow custom message', () => {
		const customMessage = 'Custom Unauthorized Message';
		const error = new UnauthorizedError(customMessage);
		expect(error.statusCode).toBe(401);
		expect(error.message).toBe(customMessage);
	});

	it('NotFoundError should have status code 404 and default message', () => {
		const error = new NotFoundError();
		expect(error.statusCode).toBe(404);
		expect(error.message).toBe('Not Found');
	});

	it('NotFoundError should allow custom message', () => {
		const customMessage = 'Custom Not Found Message';
		const error = new NotFoundError(customMessage);
		expect(error.statusCode).toBe(404);
		expect(error.message).toBe(customMessage);
	});

	it('ValidationError should have status code 422 and default message', () => {
		const error = new ValidationError();
		expect(error.statusCode).toBe(422);
		expect(error.message).toBe('Validation Error');
	});

	it('ValidationError should allow custom message', () => {
		const customMessage = 'Custom Validation Message';
		const error = new ValidationError(customMessage);
		expect(error.statusCode).toBe(422);
		expect(error.message).toBe(customMessage);
	});

	it('UnimplementedFunctionError should have status code 501 and default message', () => {
		const error = UnimplementedFunctionError();
		expect(error.statusCode).toBe(501);
		expect(error.message).toBe('Function Not Implemented');
	});

	it('UnimplementedFunctionError should allow custom message', () => {
		const customMessage = 'Custom Not Implemented Message';
		const error = UnimplementedFunctionError(customMessage);
		expect(error.statusCode).toBe(501);
		expect(error.message).toBe(customMessage);
	});
});
