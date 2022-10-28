export const config = {
  "dev": {
    "username": process.env.UDACITY_USERNAME,
    "password": process.env.UDACITY_PASSWORD,
    "database": "unnadavdev",
    "host": "udnadavdev.cqhp9p1sljey.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
