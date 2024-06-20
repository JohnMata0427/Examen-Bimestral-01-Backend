import { PrismaClient } from "@prisma/client";

const getAllTankersController = async (_, res) =>{
    try {
        const prisma = new PrismaClient();
        res.status(200).json(await prisma.tanker.findMany())
    } catch (error) {
        res.status(500).json({ msg: 'Error del servidor' })
    }
}

const createTankerController = async (req, res) =>{
    try {
        const prisma = new PrismaClient();
        const { startsAt , endsAt , ...data} = req.body
        const datetime = new Date(startsAt);
        const datetime2 = new Date(endsAt);
        const newtankerData = await prisma.tanker.create({data:{...data, startsAt: datetime , endsAt:datetime2}}) 
        
        res.status(201).json(newtankerData);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const getTankersByIDController = async(req, res)=>{
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const findTanker = await prisma.tanker.findFirst({where: { id }})
        const status  = findTanker.error ? 404 : 200
        res.status(status).json(findTanker)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const updateTankerController = async (req, res) =>{
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const tanker = await prisma.tanker.update({
            where: {id}, 
            data: req.body
        })
        const status = tanker.error ? 404:200
        res.status(status).json(tanker)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const deleteTankerController = async(req, res)=>{
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const tankerFind = await prisma.tanker.delete({
            where: { id }
        })
        const status = tankerFind.error ? 404:200
        res.status(status).json({msg: "Elemento eliminado correctamente"})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export{
    getAllTankersController,
    createTankerController,
    getTankersByIDController,
    updateTankerController,
    deleteTankerController
}