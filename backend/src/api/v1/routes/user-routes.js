import express from "express";
import { home, login, register } from "../../../controllers/user-control.js";
export const userRoutes = express.Router();

// userRoutes.get('/', (request, response)=>{
//    response.send("<h1>Rohit jha </h1>");
// })

// userRoutes.get('/login', (request, response)=>{
//    response.send("<h1>Login </h1>");
// })

userRoutes.get('/',home);
userRoutes.post('/login',login);
userRoutes.post('/register',register);