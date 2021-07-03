import { PetRepository } from '../models/PetRepository';
import { mongoService } from '../models/Services';


const getPet = async (req, res) => {
  const petRepo = new PetRepository(mongoService);

  res.json(await petRepo.getPetByOrgId("60df310caa669b8fe31fb352"));
}

export default {
  getPet
};
