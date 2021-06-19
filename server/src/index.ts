import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();
const port = 3000;

app.use(morgan('short'));
app.use('/api', routes);
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log('Welcome to image resize service');
});
