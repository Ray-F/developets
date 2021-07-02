import { MongoService } from '../models/mongodb/MongoService';
import Config from '../utils/Config';
import { PetRepository } from '../models/PetRepository';

const getPet = async (req, res) => {
  const mongoService = new MongoService(Config.MONGODB_URI, 'developets-prod');
  await mongoService.init();

  const petRepo = new PetRepository(mongoService);

  res.json(await petRepo.getPetByOrgId("60df310caa669b8fe31fb352"));
}

export default {
  getPet
};
