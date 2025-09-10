import { apiClient } from "../../../shared/services/api-client"

export const registerApiCall = async(formData)=>{
    try{
  const response = await apiClient.post('/register',formData);
       console.log(response);
       return response;
    }
    catch(err){
        console.log("error in register",err);
        throw err;
    }
}