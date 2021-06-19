import express from 'express';
import morgan from 'morgan';
import images from './images';

const routes = express.Router();

routes.use(morgan('short'));

routes.use('/images', images);

export default routes;
