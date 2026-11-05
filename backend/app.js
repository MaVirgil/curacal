import express from 'express';
import apiRouter from './routers/api.router.js';
const app = express();

app.use(apiRouter);

app.get('/health', (req, res) => res.send('OK'));

app.listen(8080, () => {
  console.log('App listening on port 8080');
});
