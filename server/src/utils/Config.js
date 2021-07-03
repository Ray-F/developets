import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const CENNZNET_RATA_PWD = process.env.CENNZNET_RATA_PWD;
const CENNZNET_RATA_ADDRESS = process.env.CENNZNET_RATA_ADDRESS

export default {
  CENNZNET_RATA_ADDRESS,
  MONGODB_URI,
  CENNZNET_RATA_PWD
};
