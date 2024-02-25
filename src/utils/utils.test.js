import { describe, it, expect } from 'vitest';
import { isValidURL } from './utils.js';

describe('isValidURL', () => {
	const validURLs = [
		'http://www.example.com',
		'https://example.com',
		'http://example.com/path/to/page?name=ferret&color=purple',
		'http://192.168.1.1',
		'http://192.168.1.1:8080',
	];

	const invalidURLs = [
		'http://',
		'example',
		'http://.com',
		'ftp://example.com',
		'http://example..com',
		'http://-example.com',
		'http://example.com-',
		'http://example.-com',
	];

	validURLs.forEach((url) => {
		it(`should return true for valid URL: ${url}`, () => {
			expect(isValidURL(url)).toBe(true);
		});
	});

	invalidURLs.forEach((url) => {
		it(`should return false for invalid URL: ${url}`, () => {
			expect(isValidURL(url)).toBe(false);
		});
	});
});
