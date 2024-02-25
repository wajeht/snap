import puppeteer from 'puppeteer';
import crypto from 'crypto';
import path from 'path';
import sharp from 'sharp';

let cachedBrowser;

async function getBrowser() {
	try {
		if (!cachedBrowser) {
			cachedBrowser = await puppeteer.launch({
				headless: true,
				executablePath: '/usr/bin/chromium-browser',
				args: ['--no-sandbox', '--disable-gpu'],
			});
		}
		return cachedBrowser;
	} catch (error) {
		console.error('Error occurred while launching the browser: ', error);
		throw error;
	}
}

export async function screenshot(url) {
	try {
		const FILE_NAME = crypto.randomBytes(8).toString('hex') + '.png';
		const PATH = path.resolve(path.join(process.cwd(), 'public', 'img', FILE_NAME));

		const browser = await getBrowser();
		const page = await browser.newPage();
		await page.goto(url);
		const screenshotBuffer = await page.screenshot();
		await page.close();

		await sharp(screenshotBuffer).resize(800).jpeg({ quality: 80 }).toFile(PATH);

		return PATH;
	} catch (error) {
		console.error('Error occurred while capturing screenshot: ', error);
		throw error;
	}
}
