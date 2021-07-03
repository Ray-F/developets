import { MongoService } from './mongodb/MongoService';
import Config from '../utils/Config';

import cennz from '../models/cennz/CennzService';

const mongoService = new MongoService(Config.MONGODB_URI, 'developets-prod');
mongoService.init();

export {
  mongoService,
};
