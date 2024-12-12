import { z } from 'zod';

export const shopSchema = z.object({
    shopName: z.string().trim().min(1, { message: "Shop name is required." }),
    address: z.string().trim().min(1, { message: "Address is required." }),
    googleLink: z.string().trim().url({ message: "Google link must be a valid URL." }),
    description: z.string().trim().min(1, { message: "Description is required." }),
    image_url: z.string().url({ message: "Image URL must be a valid URL." }),
}).strict();

