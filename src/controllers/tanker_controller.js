import { PrismaClient } from "@prisma/client";

const getAllTankersController = async (req, res) =>{
    try {
        const prisma = new PrismaClient();
        const tankers = await prisma.tanker.findMany()

        res.status(200).json(tankers)
    } catch (error) {
        res.status(500).json({msg:'Error del servidor'})
    }
}

const createTankerController = async (req, res) =>{
    try {
        const {schedule, ...data} = req.body
        const time = new Date(schedule)
        const prisma = new PrismaClient();
        const newtankerData = await prisma.tanker.create({data:{...data, schedule:time}}) 
        
        res.status(201).json(newtankerData);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}




const getTankersByIDController = async(req, res)=>{
    
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const findTanker = await prisma.tanker.findFirst({where: {id: Number(id)}})
        const status  = findTanker.error ? 404:200
        res.status(status).json(findTanker)
    } catch (error) {
        res.status(500).json({msg:'Error del servidor'})
    }
}

const updateTankerController = async (req, res) =>{
    
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const tanker = await prisma.tanker.update({
            where: {id: Number(id)}, 
            data: req.body
        })
        const status = tanker.error ? 404:200
        res.status(status).json(tanker)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Error del servidor'})
    }
}

const deleteTankerController = async(req, res)=>{
    
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const tankerFind = await prisma.tanker.delete({
            where: {id:Number(id)}
        })
        const status = tankerFind.error ? 404:200
        res.status(status).json({msg: "Elemento eliminado correctamente"})
    } catch (error) {
        res.status(500).json({msg:'Error del servidor'})
    }
}

export{
    getAllTankersController,
    createTankerController,
    getTankersByIDController,
    updateTankerController,
    deleteTankerController
}