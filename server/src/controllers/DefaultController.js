import { PetRepository } from '../models/PetRepository';
import { mongoService, cennzService } from '../models/Services';

const getPet = async (req, res) => {
  const petRepo = new PetRepository(mongoService);

  res.json(await petRepo.getPetByOrgId('60df310caa669b8fe31fb352'));
};

const getAccessory = async (req, res) => {
  const client = await cennzService.createClient();
  const details = await cennzService.getClientDetails(client);
  console.log(details);
};

export default {
  getPet,
  getAccessory
};
