import {Router} from "express";

import { createTankerController, deleteTankerController, getAllTankersController, getTankersByIDController, updateTankerController } from "../controllers/tanker_controller.js";
import { verifyToken } from "../middleware/auth.js";

const router=Router()

router.get('/tankers', getAllTankersController) 
router.get('/tankers/:id', getTankersByIDController)
router.post('/tankers', verifyToken, createTankerController)
router.put('/tankers/:id', verifyToken, updateTankerController)
router.delete('/tankers/:id', verifyToken, deleteTankerController)

export default router
