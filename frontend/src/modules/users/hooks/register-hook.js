import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../validation/register-schema';
import { registerApiCall } from '../api/user-api';

export const useRegister =()=>{
   const {register ,handleSubmit , formState:{errors}}= useForm({
    resolver : zodResolver(registerSchema),
    defaultValues:{
        email :"",
        password:"",
        name :""
    }
   });

    const doSubmit = async(formData)=>{
        console.log("Register Form Submit",formData);
        try{
         const response = await registerApiCall(formData);
         console.log('response is ',response);
         if(response.data.id){
            alert("Welcome user");
            return response;
         }else{
            alert("user is not register");
         }
        }catch(err){
            alert("user is not register",err);
        }
    }
    return {doSubmit,register , handleSubmit , errors}
}