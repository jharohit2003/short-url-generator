// frame work of nodejs
import express, { json } from 'express';
import { userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/api/utils/middlewares/404.js';
import { connectToDB } from './src/api/utils/db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',userRoutes);
// app.use(middleware)

app.use(error404);

const promise =connectToDB();
promise.then(result=>{
    console.log("database connection created successfully");
    
   const server = app.listen(1234, err=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("Server up and running",server.address().port);
        
    }

})
})
.catch(err=>{
   console.log('DB connection fails');
   
})

