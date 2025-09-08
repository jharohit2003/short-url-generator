import mongoose from 'mongoose';

export function connectToDB(){ 
  return mongoose.connect(process.env.DB_URL);
}