import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import formidableMiddleware from 'express-formidable';
import { port, time } from '../settings.js';

const api = express();
const options = {
  keepExtensions: true,
};

api.use(cors()); //enables cors on the api (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) || https://www.npmjs.com/package/cors
api.use(helmet()); //adds headers to protect the api || https://www.npmjs.com/package/helmet
api.use(formidableMiddleware(options)); //for file upload || https://www.npmjs.com/package/express-formidable
api.listen(port, () => {
  console.log(time + ' Api up and running');
});

export default api;
