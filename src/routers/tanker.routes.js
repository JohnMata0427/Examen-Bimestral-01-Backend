import {Router} from "express";

import { createTankerController, deleteTankerController, getAllTankersController, getTankersByIDController, updateTankerController } from "../controllers/tanker_controller.js";
import { verifyToken } from "../middleware/auth.js";

const router=Router()

router.get('/tankers', getAllTankersController) 
router.get('/tankers/:id', getTankersByIDController)
router.post('/tankers', createTankerController)
router.put('/tankers/:id', updateTankerController)
router.delete('/tankers/:id', deleteTankerController)

export default router
