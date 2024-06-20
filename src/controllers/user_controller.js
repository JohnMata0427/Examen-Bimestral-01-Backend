import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import { createToken } from '../middleware/auth.js';


const registerUserController = async ( req , res ) => {
    try {
        const prisma = new PrismaClient();
        const { username, email, password } = req.body;
        const newUser = {
            username,
            email,
            password: await bcrypt.hash(password , 10),
            role: 'USER'
        }
        await prisma.user.create({ data: newUser });
        res.status(201).json({message: `User ${username} Created, Please Login to Continue`});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

const loginUserController = async ( req , res ) => {
    try{
        const prisma = new PrismaClient();
        const { username, password } = req.body;
        const user = await prisma.user.findFirst({ where: { username } });
        const passwordMatch = bcrypt.compare(password, user.password);
        if(passwordMatch){
            const token = createToken({ id: user.id, username: user.username, role: user.role});
            res.status(200).json({ message: 'Login Success', token});
        }
        res.status(401).json({message: 'Invalid Credentials'});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export {
    registerUserController,
    loginUserController
}