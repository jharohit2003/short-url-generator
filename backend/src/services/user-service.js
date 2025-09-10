import { userModel } from "../models/user-schema.js";

export const registerUser = async(userObject)=>{
     try{ 
  const doc = await userModel.create(userObject);
  return doc;
     }
     catch(err){
     throw err;
     }
}