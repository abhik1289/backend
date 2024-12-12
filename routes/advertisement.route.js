import express from 'express';


import { validateData } from "../middleware/validationMiddleware.js";
import { shopSchema } from '../schemas/advertisementSchemas.js';
import { getAdvertisement, addAdvertisement, deleteAdvertisement } from '../controllers/advertisement.controllers.js';
const router = express.Router();



router.post("/add-advertisement", validateData(shopSchema), addAdvertisement);
router.get("/get-advertisement", getAdvertisement);
router.delete("/delete-advertisement/:id", deleteAdvertisement);






export default router;