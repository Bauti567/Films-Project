// Controlador de autenticacion de usuario
import User from "../schemas/user.schema.js";
import bcrypt from 'bcryptjs'
import UserSchema from "../models/user.model.js"


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
        if(userFound) return res.send({
            message: "se encontró el usuario"
        })

    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req,res) =>{
    res.send({
        message:"El logout"
    })
}