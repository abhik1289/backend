import { z } from "zod";


export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})


export const userSignupSchema = z.object({
    fullName: z.string().min(2).max(10),
    email: z.string().email(),
    password: z.string()
})