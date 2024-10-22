// validacion de datos
import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'email es required'
    }).email({
        required_error: 'Password is required'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must have at lest 6 characters'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must have at lest 6 characters'
    })
})