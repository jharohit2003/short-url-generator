import express from "express";
export const userRoutes = express.Router();

// userRoutes.get('/', (request, response)=>{
//    response.send("<h1>Rohit jha </h1>");
// })

// userRoutes.get('/login', (request, response)=>{
//    response.send("<h1>Login </h1>");
// })

userRoutes.get('/');
userRoutes.get('/login');
userRoutes.get('/register');

