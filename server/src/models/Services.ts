import { MongoService } from './mongodb/MongoService';
import Config from '../utils/Config';

const mongoService = new MongoService(Config.MONGODB_URI, 'developets-prod');
mongoService.init()

export {
  mongoService
}
