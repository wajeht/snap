import { describe, it, expect, vi } from 'vitest';
import { catchAsyncErrors } from './app.middleware.js';

describe('catchAsyncErrors', () => {
	it('should catch errors in async functions and pass them to next', async () => {
		const errorFunction = vi.fn(async () => {
			throw new Error('Test Error');
		});

		const nextFunction = vi.fn();

		const wrappedFunction = catchAsyncErrors(errorFunction);

		const req = {};
		const res = {};

		await wrappedFunction(req, res, nextFunction);

		expect(nextFunction).toHaveBeenCalledWith(expect.any(Error));
		expect(nextFunction).toHaveBeenCalledTimes(1);
	});

	it('should successfully execute async function without errors', async () => {
		const successFunction = vi.fn(async () => 'Success');

		const nextFunction = vi.fn();

		const wrappedFunction = catchAsyncErrors(successFunction);

		const req = {};
		const res = { send: vi.fn() };

		await wrappedFunction(req, res, nextFunction);

		expect(nextFunction).not.toHaveBeenCalled();
		expect(successFunction).toHaveBeenCalled();
	});
});
