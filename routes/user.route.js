import express from 'express';
import { login } from '../controllers/user.controllers.js';
import { userLoginSchema } from '../schemas/userSchemas.js';
import { validateData } from "../middleware/validationMiddleware.js";
const router = express.Router();


router.post("/login", validateData(userLoginSchema), login);



export default router;