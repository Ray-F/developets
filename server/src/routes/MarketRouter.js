import { Router } from 'express';

import marketController from '../controllers/MarketController';


const router = Router();

router.get('', marketController.getMarketplace);

export default router;
