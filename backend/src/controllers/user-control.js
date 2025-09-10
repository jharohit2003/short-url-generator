import { registerUser } from "../services/user-service.js"

export const home =(request,response)=>{
response.send("<h1> home</h1>")
}
export const login =(request,response)=>{
response.send("<h1> Login</h1>")
}

export const register =async (request , response)=>{
    const userData = request.body;
    try{

        const doc =await registerUser(userData);
   response.json({message:'Register Successfully', id:doc._id});
       console.log(" register data",userData);
    response.send(userData);
    }catch(err){
        response.json({error:"Something Went Wrong During Register",err})
    }
   

    
}