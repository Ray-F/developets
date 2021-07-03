import { Router } from 'express';
import petController  from '../controllers/PetController';

const router = Router();

router.get('', petController.view);
router.post('', petController.savePetState)


export default router
