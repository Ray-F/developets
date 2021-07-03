import { PetRepository } from '../repository/PetRepository';
import { mongoService } from '../model/mongodb/MongoService';


const githubEvent = async (req, res) => {
  const petRepo = new PetRepository(mongoService);

  // Positive number corresponding to number of HP deducted (cannot kill pet)
  const linearPenalty = parseInt('10');

  if (linearPenalty === 0) {
    res.json({
               status: 200,
               message: 'No bad practice found!',
             });
  } else {
    let { coin, hp } = await petRepo.getCoinAndHp();

    // Determine what the lowest punishment is (based on either halving HP or the linear penalty)
    const actualPenalty = Math.min(Math.round(hp / 2), linearPenalty);

    await petRepo.setCoinAndHp(coin, hp - actualPenalty);

    res.json({
               status: 200,
               message: `Deducted ${actualPenalty} health points for the bad practice!`,
             });
  }

};

export default {
  githubEvent,
};
