import { ObjectId } from 'mongodb';

class Accessory {
  _id: ObjectId
  nftId: string

  ownerId: string
  ownerNftId: string

  name: string
  value: number

  pictureUrl: string
}
