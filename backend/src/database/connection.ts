import { connect } from 'mongoose'

import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/BuscaLivreDB';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URL
    || MONGO_DB_URL,
) => connect(mongoDatabaseURI);

export default connectToDatabase;
