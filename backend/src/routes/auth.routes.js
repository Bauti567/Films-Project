import { Router } from "express";
import { login, logout, profile, registerUser } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";


const router = Router()

router.post('/register',validateSchema(registerSchema),registerUser)
router.post('/login',validateSchema(loginSchema),login)
router.post('/logout', logout)

router.get('/profile',authRequired, profile)

export default router