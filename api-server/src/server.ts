
import express from 'express';
import { sequelize } from './sequelize';
import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';

import { V0MODELS } from './controllers/v0/model.index';

(async () => {
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen
  const corsWhitelist = [
    'http://localhost:8100',
    'http://udagram-frontend-dev.s3-website-us-east-1.amazonaws.com'
    ];
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(req, res, next) {
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
      res.header("Access-Control-Allow-Origin", req.headers.origin);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    }
    next();
  });

  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
