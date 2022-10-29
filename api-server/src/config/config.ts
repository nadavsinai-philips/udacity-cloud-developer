import * as dotenv from 'dotenv' 
dotenv.config()

 const env = {
  "dev": {
    "username":process.env.UDACITY_USERNAME,
    "password": process.env.UDACITY_PASSWORD,
    "database": process.env.UDACITY_DATABASE,
    "host":"localhost", 
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-nadav-dev",
    "jwt": {
      "secret": process.env.JWT_SECRET
    },
  },
  "prod": {
    "aws_profile":"DEPLOYED",
    "host":  process.env.UDACITY_DB_URL,
  }
}
const prod = process.env.NODE_ENV==='production';
export const config = prod ?  {...env.dev,...env.prod} : env.dev;

