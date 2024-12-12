import { z } from "zod";


export const userLoginSchema = z.object({
    email: z.string().email({ message: "Invalid email format." }),
    password: z.string({ message: "Password is required." }),
})


export const userSignupSchema = z.object({
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }).max(10, { message: "Full name must be at most 10 characters." }),
    email: z.string().email({ message: "Invalid email format." }),
    password: z.string({ message: "Password is required." }),
})