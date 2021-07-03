import { Keyring } from '@polkadot/keyring';
import fs from 'fs';
import { AccessoryRepository } from '../models/AccessoryRepository';


const mockAccessory = {
  name: 'Sunglasses',
  media: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/74229/preview.svg',
  orgId: null,
  cost: 5,
  accessoryId: 10,
};


/**
 * Generates the private key (identity) for a user through their `private_key.json` key and password.
 */
const generateIdentity = () => {
  const keyring = new Keyring({ type: 'sr25519' });
  const json = JSON.parse(fs.readFileSync('private_keys/rata.json').toString());
  console.log(json);
  const identity = keyring.addFromJson(json);
  identity.decodePkcs8('rata');

  return identity;
};

const createCollection = async (req, res, next) => {
  const api = await cennzService.createClient();
  const identity = generateIdentity();

  const collectionName = 'developets-accessories-1';
  const mdBaseUri = 'ipfs';

  let respCode = null;
  await api.tx.nft.createCollection(collectionName, mdBaseUri, null)
    .signAndSend(identity, {}, (res) => {
      console.log(res.status.toHuman(true));
    });

  res.json(200);
};


const mintToken = async (req, res) => {
  const repo = new AccessoryRepository();

  await repo.create(mockAccessory);

  res.json("Test");
};

const list = async (req, res) => {
  const repo = new AccessoryRepository();

  res.json(await repo.listAvailableAccessories());
}


export default {
  createCollection,
  list,
  mintToken,
};
