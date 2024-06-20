import express from 'express';
import dotenv from 'dotenv';
import routerUser from './routers/user.routes.js';
import routerTanker from './routers/tanker.routes.js';
import routerDriver from './routers/driver.routes.js';

const app = express();
dotenv.config();


app.set("port" , process.env.PORT || 3000 );
app.use(express.json());
app.get("/" , ( req , res ) => res.send("Server on"));
app.use('/api/v1', routerUser);
app.use('/api/v1', routerTanker);
app.use('/api/v1', routerDriver)


export default app;