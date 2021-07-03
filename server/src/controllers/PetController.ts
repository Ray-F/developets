import { Pet } from '../models/Pet';

const view = async (req, res) => {
  const pet: Pet = {
    _id: undefined,
    creationDate: undefined,
    energyLevel: 100,
    name: '',
    orgId: undefined
  }
  res.json()
}

export default {
  view
}
