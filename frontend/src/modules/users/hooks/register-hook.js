import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../validation/register-schema';

export const useRegister =()=>{
   const {register ,handleSubmit , formState:{errors}}= useForm({
    resolver : zodResolver(registerSchema),
    defaultValues:{
        email :"sample@gmail.com",
        password:" ",
        name :" "
    }
   });
    const doSubmit =(formData)=>{
        console.log("Register Form Submit",formData);
    }
    return {doSubmit,register , handleSubmit,errors}
}