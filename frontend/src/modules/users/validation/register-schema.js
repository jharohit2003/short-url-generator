import { z} from 'zod';
export const registerSchema = z.object({
    email:z.string().min(1,"Email is required").email("invalid format"),
    password : z.string().min(1,"Password must br >= 8").max(25,"password must be <= 25"),
    name : z.string().min(2,"Name must be >=2").max(25,"Name Max allowed <= 25").trim()
})