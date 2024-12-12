import express from 'express';


import { validateData } from "../middleware/validationMiddleware.js";
import { addPostSchema } from '../schemas/postSchemas.js';
import { addPost, getPosts } from '../controllers/post.controllers.js';
const router = express.Router();



router.post("/add-post", validateData(addPostSchema), addPost);
router.get("/get-posts", getPosts);





export default router;