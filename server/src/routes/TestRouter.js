import { Router } from 'express';
import dummyController from '../controllers/DummyDataController'

const router = Router();

router.get('/createCollection', dummyController.createCollection)
router.get('/tokens', dummyController.getTokens)
router.get('/mintToken', dummyController.mintToken)


export default router
