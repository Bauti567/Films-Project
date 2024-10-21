// Controlador de autenticacion de usuario
import User from "../schemas/user.schema.js";
import bcrypt from 'bcryptjs'
import UserSchema from "../models/user.model.js"
import jwt from "jsonwebtoken";

export const registerUser = async (req,res)=>{
    const {username, email, password} = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new UserSchema({
            username,
            email,
            password: passwordHash
        })
        
        const UserSaved = await newUser.save()
        console.log(UserSaved)
        res.status(200).json({
            id: UserSaved._id,
            username: UserSaved.username,
            email: UserSaved.email
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

export const login = async(req,res) =>{
    const {email, password} = req.body
    try {
        const userFound = await User.findOne({email})
        if(userFound) return res.status(400).json({
            message: "User not found"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

export const logout = async (req,res) =>{
    res.send({
        message:"El logout"
    })
}