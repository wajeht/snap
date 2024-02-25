# 📸 Snap

[![Node.js CI](https://github.com/wajeht/snap/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wajeht/snap/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/wajeht/snap/blob/main/LICENSE) [![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/wajeht/snap)

swiftly snap any web

# 💻 Development

Clone the repository

```bash
$ git clone https://github.com/wajeht/snap.git
```

Copy `.env.example` to `.env`

```bash
$ cp .env.example .env
```

Install dependencies

```bash
$ npm install
```

Run development server

```bash
$ npm run dev
```

Test the application

```bash
$ npm run test
```

# 📖 Documentation

> [!WARNING]
> This project documentation is unfinished and heavily work in progress.

### Endpoint: /

Capture a screenshot of a web page by specifying its URL.

### Method: `GET`

#### Query Parameters:

- `url`: `Required`. The web page URL to capture.
- `size`: `Optional`. Specify the screenshot size (e.g., "1024x768").
- `quality`: `Optional`. Specify the screenshot quality.

#### Example Request:

```bash
$ curl http://localhost:PORT/?url=https://example.com
```

Replace `PORT` with the port number on which the server is running.

### Response:

A `307 Temporary Redirect` to the path where the captured screenshot is stored.

### Errors:

- Missing `url` parameter: Returns an error message indicating that the `url` parameter is required.
- Invalid `url`: Returns an error message indicating the URL is invalid.

# 📜 License

Distributed under the MIT License © wajeht. See [LICENSE](./LICENSE) for more information.

```

```
