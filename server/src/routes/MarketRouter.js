import { Router } from 'express';

import marketController from '../controllers/MarketController';


const router = Router();

router.get('', marketController.getMarketplace);
router.post('', marketController.buy);

export default router;
