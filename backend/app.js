import express from 'express';
import recipientRouter from './routers/recipient.router.js';
const app = express();

app.use(recipientRouter);

app.get('/health', (req, res) => res.send('OK'));

app.listen(8080, () => {
  console.log('App listening on port 8080');
});
