# Udagram project submission
### > by Nadav Sinai <
https://github.com/nadavsinai-philips/udacity-cloud-developer/
Here is the repository structure:
```bash
├── README.md
├── api-server
├── frontend
└── image-service
   
```
this repo is a fork of the `udacity-cloud-developer` repo with only the relevent files for the project submission kept. [see refactor commit](https://github.com/udacity/cloud-developer/commit/34f09b985a903e0029835d4ced5884c670cbed9c)


## Live example
the live example url is : http://udagram-frontend-dev.s3-website-us-east-1.amazonaws.com/

## Deployment

ElasticBean stalk was used to deploy the 3 apps.
* the image-service is avilable at - http://udgram-image-filter-dev.us-east-1.elasticbeanstalk.com
* the api-service is available at - http://udagram-api-dev.us-east-1.elasticbeanstalk.com/api/v0/
* frontEnd is again  - http://udagram-frontend-dev.s3-website-us-east-1.amazonaws.com/


# extra points done
 - nice refacotring of the repo and keeping good branch managment practices (se pprs etc)
 - whole app deployed and connected
 - Auth implemendented
 

 # still not working
  - still unable to post photos on the S3 bucket from client (it get the signedUrl but get 403 when posting there), probably
  the s3 bucket policy is wrong

