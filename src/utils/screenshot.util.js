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

export async function screenshot({ url, quality = 80, size = 800 }) {
	try {
		const FILE_NAME = crypto.randomBytes(8).toString('hex') + '.png';
		const PATH = path.resolve(path.join(process.cwd(), 'public', 'img', FILE_NAME));

		const browser = await getBrowser();
		const page = await browser.newPage();
		await page.goto(url);
		const screenshotBuffer = await page.screenshot();
		await page.close();

		await sharp(screenshotBuffer)
			.resize(parseInt(size))
			.jpeg({ quality: parseInt(quality) })
			.toFile(PATH);

		// add a expires at
		// create a job
		// manaully delete them

		return {
			path: `/img/${FILE_NAME}`,
			fileName: FILE_NAME,
		};
	} catch (error) {
		console.error('Error occurred while capturing screenshot: ', error);
		throw error;
	}
}
