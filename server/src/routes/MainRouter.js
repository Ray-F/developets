import { Router } from 'express';

import defaultController from '../controllers/DefaultController';

const router = Router();


router.use('/api/pet', defaultController.getPet);

router.use('/api/accessory', defaultController.getAccessory);

router.use('/api', (req, res) => {
  res.send(`
    <h2>Express API</h2>
    <p>
      You have reached the express API.
      Email rf.raymondfeng@gmail.com for any questions on usage.
    </p>
  `);
});

module.exports = router;
