import {Router} from "express";

import { createDriverController, deleteDriverController, getAllDriversController, getDriversByIDController, updateDriverController } from "../controllers/driver_controller.js";
import { verifyToken } from "../middleware/auth.js";

const router=Router()

router.get('/drivers', getAllDriversController) 
router.get('/drivers/:id', getDriversByIDController)
router.post('/drivers', createDriverController)
router.put('/drivers/:id', verifyToken, updateDriverController)
router.delete('/drivers/:id', verifyToken, deleteDriverController)

export default router
