import { PetRepository } from '../models/PetRepository';
import { mongoService } from '../models/Services';
import { createClient, getClientDetails } from '../models/cennz/CennzService';

const getPet = async (req, res) => {
  const petRepo = new PetRepository(mongoService);

  res.json(await petRepo.getPetByOrgId('60df310caa669b8fe31fb352'));
};

const getAccessory = async (req, res) => {
  const client = await createClient();
  const details = await getClientDetails(client);
  console.log(details);
};

export default {
  getPet,
  getAccessory
};
