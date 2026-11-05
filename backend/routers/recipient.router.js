import { Router } from 'express';
const router = Router();

router.get('/api/recipients', (req, res) => {
  res.send({ data: 'GET recipients' });
});

router.get('/api/recipients/:id', (req, res) => {
  const recipientId = Number(req.params.id);
  res.send({ data: `GET recipient by id: ${recipientId}` });
});

router.post('/api/recipients', (req, res) => {
  res.send({ data: 'Create a recipient' });
});

router.patch('/api/recipients/:id', (req, res) => {
  const recipientId = Number(req.params.id);
  res.send({ data: `Edit recipient by id: ${recipientId}` });
});

router.delete('/api/recipients/:id', (req, res) => {
  const recipientId = Number(req.params.id);
  res.send({ data: `Delete recipient by id: ${recipientId}` });
});

router.get('/api/recipients:/id/occasions', (req, res) => {
  const recipientId = Number(req.params.id);
  res.send({
    data: `GET all gift-ocassions for recipient with id: ${recipientId}`,
  });
});

router.post('/api/recipients:/id/occasions', (req, res) => {
  const recipientId = Number(req.params.id);
  res.send({
    data: `POST all gift-ocassions for recipient with id: ${recipientId}`,
  });
});

router.get('/api/occasions/:id', (req, res) => {
  const occasionId = Number(req.params.id);
  res.send({ data: `Get occasion with id: ${occasionId}` });
});

router.patch('/api/occasions/:id', (req, res) => {
  const occasionId = Number(req.params.id);
  res.send({ data: `Edit occasion with id: ${occasionId}` });
});

router.patch('/api/occasions/:id', (req, res) => {
  const occasionId = Number(req.params.id);
  res.send({ data: `Delete occasion with id: ${occasionId}`} );
});

export default router;
