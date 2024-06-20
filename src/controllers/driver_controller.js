import { PrismaClient } from "@prisma/client";

const getAllDriversController = async (_, res) =>{
    try {
        const prisma = new PrismaClient();
        res.status(200).json(await prisma.driver.findMany())
    } catch (error) {
        res.status(500).json({ msg: 'Error del servidor' })
    }
}

const createDriverController = async (req, res) =>{
    try {
        const prisma = new PrismaClient();
        res.status(201).json(await prisma.driver.create({data: req.body}) );
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const getDriversByIDController = async(req, res)=>{
    try {
        const prisma = new PrismaClient()
        const { id } = req.params
        const findDriver = await prisma.driver.findFirst({where: { id: parseInt(id) }})
        const status  = findDriver.error ? 404 : 200
        res.status(status).json(findDriver)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const updateDriverController = async (req, res) =>{
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const Driver = await prisma.driver.update({
            where: {id: parseInt(id) }, 
            data: req.body
        })
        const status = Driver.error ? 404:200
        res.status(status).json(Driver)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const deleteDriverController = async(req, res)=>{
    try {
        const prisma = new PrismaClient()
        const {id} = req.params
        const DriverFind = await prisma.driver.delete({
            where: { id: parseInt(id)  }
        })
        const status = DriverFind.error ? 404:200
        res.status(status).json({msg: `Conductor eliminado correctamente`})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export{
    getAllDriversController,
    createDriverController,
    getDriversByIDController,
    updateDriverController,
    deleteDriverController
}