import express from 'express';
import { addUser, login } from '../controllers/user.controllers.js';
import { userLoginSchema, userSignupSchema } from '../schemas/userSchemas.js';
import { validateData } from "../middleware/validationMiddleware.js";
const router = express.Router();


router.post("/login", validateData(userLoginSchema), login);
router.post("/add-user", validateData(userSignupSchema), addUser);




export default router;