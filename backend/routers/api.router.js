import { Router } from 'express'

const router = Router();

router.get('/api', (req, res) => {
  res.send({data: "ok"});
});

export default router;
