import {Router} from "express";

import { createTankerController, deleteTankerController, getAllTankersController, getTankersByIDController, updateTankerController } from "../controllers/tanker_controller.js";

const router=Router()

router.get('/tankers', getAllTankersController) 
router.post('/tankers', createTankerController)
router.get('/tankers/:id', getTankersByIDController)
router.put('/tankers/:id', updateTankerController)
router.delete('/tankers/:id', deleteTankerController)

export default router
