import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';


const registerUserController = async ( req , res ) => {
    try{
        const prisma = new PrismaClient();
        const { username , password } = req.body;
        console.log(username);
        const hashedPassword = await bcrypt.hash( password , 10 );
        const newUser = {
            username,
            password: hashedPassword
        }
        const response = await prisma.user.create({ data: newUser });
        console.log(newUser);
        //const response = await prisma.user.create(newUser);
        res.status(201).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

const loginUserController = async ( req , res ) => {
    try{
        const prisma = new PrismaClient();
        const { username , password } = req.body;
        const user = await prisma.user.findUnique({where:{username}});
        console.log(user);
        const passwordMatch = bcrypt.compare(password, user.password);
        if(passwordMatch){
            res.status(200).json({message: 'Login Successful'});
        }else{
            res.status(401).json({message: 'Invalid Credentials'});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export {
    registerUserController,
    loginUserController
}