import Config from './utils/Config';
import { PetRepository } from './models/PetRepository';
import { MongoService } from './models/mongodb/MongoService';
import { Pet } from './models/Pet';
import { ObjectId } from 'mongodb';

/**
 * File for populating database with dummy data.
 */
jest.setTimeout(10_000);

test('Add one pet to the DB', async () => {
  const petRepo = new PetRepository(mongoService);

  const pet: Pet = {
    _id: new ObjectId(),
    orgId: new ObjectId(),
    name: 'Jerry',
    lifeEssence: 100,
    creationDate: new Date(),
  };

  await petRepo.save(pet);
});
