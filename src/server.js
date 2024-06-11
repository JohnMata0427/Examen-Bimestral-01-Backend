import express from 'express';
import dotenv from 'dotenv';
import routerUser from './routers/user.routes.js';

const app = express();
dotenv.config();
app.set("port" , process.env.PORT || 3000 );
app.use(express.json());
app.get("/" , ( req , res ) => res.send("Server on"));
app.use('/api/v1', routerUser);


export default app;