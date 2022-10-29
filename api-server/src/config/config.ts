export const config = {
  "dev": {
    "username":process.env.UDACITY_USERNAME,
    "password": process.env.UDACITY_PASSWORD,
    "database": process.env.UDACITY_DATABASE,
    "host":"localhost", 
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  },
  "prod": {
    "host":  process.env.UDACITY_DB_URL,
  }
}
