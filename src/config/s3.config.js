import './setup-dotenv.js';

export const s3Config = {
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_CREDENTIALS_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_CREDENTIALS_SECRET_ACCESS_KEY
  },
  endpoint: process.env.S3_ENDPOINT,
  forcePathStyle: process.env.S3_FORCE_PATH_STYLE
};
