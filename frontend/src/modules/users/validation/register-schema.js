import { z} from 'zod';
export const registerSchema = z.object({
    email:z.string().min(1,"Email is required").z.email("invalid format"),
    password : z.string().min(0,"Password must br >= 8").max(25,"password must be <= 25"),
    name : z.string().min(2,"Name must be >=2").max(25,"Nam3 Max aloowed <= 25").trim()
})