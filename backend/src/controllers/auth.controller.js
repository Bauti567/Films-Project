// Controlador de autenticacion de usuario
import User from "../schemas/user.schema.js";
import bcrypt from 'bcryptjs'
import UserSchema from "../models/user.model.js"


export const registerUser = async (req,res)=>{
    const {username, email, password} = req.body
    try {

        const newUser = new UserSchema({
            username,
            email,
            password
        })

        const UserSaved = await newUser.save()
        console.log(UserSaved)
    } catch (error) {
        console.log(error)
    }
}

export const login = async(req,res) =>{
    console.log('logeando usuario')
}

export const logout = async (req,res) =>{
    console.log('cerrando sesion')
}