import { Keyring } from '@polkadot/keyring';
import fs from 'fs';
import { cennzService } from '../models/Services';


/**
 * Generates the private key (identity) for a user through their `private_key.json` key and password.
 */
const generateIdentity = () => {
  const keyring = new Keyring({ type: 'sr25519' });
  const json = JSON.parse(fs.readFileSync("private_keys/rata.json").toString());
  console.log(json);
  const identity = keyring.addFromJson(json);
  identity.decodePkcs8("rata");

  return identity;
}

const createCollection = async (req, res, next) => {
  const api = await cennzService.createClient();
  const identity = generateIdentity();

  const collectionName = "developets-accessories-1";
  const mdBaseUri = "ipfs";

  let respCode = null;
  await api.tx.nft.createCollection(collectionName, mdBaseUri, null)
    .signAndSend(identity, {}, (res) => {
      console.log(res.status.toHuman(true))
    });

  res.json(200)
}

const mintToken = async (req, res, next) => {
  const api = await cennzService.createClient();
  const identity = generateIdentity();

  const collectionId = 2;
  const quantity = 1;
  const creator = identity.address;

  /*
   * These attributes are saved inside the NFT that is minted, and cannot be changed.
   */
  const attributes = [
    // The URL of accessory image / other media asset
    { 'Url': 'https://www.rayf.me' },

    // The name of the accessory
    { 'Text': "New accessory 1" },

    // The time at which the NFT is created (i.e. now)
    { 'Timestamp': new Date().valueOf() },
  ]

  let respCode = null;
  await api.tx.nft.mintSeries(collectionId, quantity, creator, attributes, null, null)
    .signAndSend(identity, {}, (res) => {
      console.log(res.toHuman())
      if (res.status.isFinalized) {
        respCode = 200;
      }
    });
  res.json(respCode);
}

const getTokens = async (req, res, next) => {
  const api = await cennzService.createClient();

  const collectionId = 2;

  const result = await api.derive.nft.tokenInfoForCollection(collectionId);
  res.json(result);
}




export default {
  createCollection,
  getTokens,
  mintToken
}
