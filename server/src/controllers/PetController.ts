import { PetRepository } from '../models/PetRepository';
import { mongoService } from '../models/Services';

const view = async (req, res) => {
  const petRepo = new PetRepository(mongoService);
  const current = await petRepo.getCoinAndEnergy();

  res.json({
             coins: current.coin,
             hp: current.hp,
           });
};

const savePetState = async (req, res) => {
  const petRepo = new PetRepository(mongoService);

  const { coin, hp } = req.body;

  await petRepo.setCoinAndHp(coin, hp);

  res.sendStatus(200);
};

export default {
  savePetState,
  view,
};
