import { ObjectId } from 'mongodb';

interface Pet {
  _id: ObjectId
  orgId: ObjectId

  name: string
  lifeEssence: number
  creationDate: Date
}


export type {
  Pet
}
