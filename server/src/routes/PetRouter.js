import { Router } from 'express';
import petController  from '../controllers/PetController';

const router = Router();

router.get('', petController.view);


export default router
