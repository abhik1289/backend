import { z } from "zod";


export const addPostSchema = z.object({
    title: z.string().min(5).max(50),
    author: z.string().min(3).max(15),
    content: z.string().min(10),
    category: z.enum(["article", "poetry", "stories"]),
    image_url: z.string().url()
})

