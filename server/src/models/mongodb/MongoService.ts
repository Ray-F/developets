import { Db, MongoClient } from 'mongodb';


/**
 * Infrastructure service class for interacting with the Mongo Atlas database.
 */
class MongoService {
  public db: Db;
  private readonly dbName: string;
  private client: MongoClient;

  constructor(uri: string, dbName: string) {
    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    this.dbName = dbName;
  }

  async init() {
    try {
      await this.client.connect();
    } catch (e: any) {
      console.log(e)
    }
    console.log('[Server] MongoDB connected');

    this.db = this.client.db(this.dbName);
  }

}

export {
  MongoService
}
