import express from 'express';
// import morgan from 'morgan';

const images = express.Router();

images.use((req, res, next) => {
  console.log('on route /images');
  next();
});

images.get('/', (req, res) => {
  res.send('GET /api/images/');
});

export default images;
