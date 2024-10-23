// Controlador de autenticacion de usuario
import bcrypt from 'bcryptjs'
import User from "../models/user.model.js"
import { createAccessToken } from "../libs/jwt.js";
import userModel from '../models/user.model.js';

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
        const token = await createAccessToken({id: UserSaved._id})
        res.cookie('token', token)
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
        const UserFound = await User.findOne({email})
        if(!UserFound) return res.status(400).json({
            message: "User not found"
        })

        const isMatch = await bcrypt.compare(password, UserFound.password)
        if(!isMatch) return res.status(400).json({
            message: "Invalid credentials"

        })

        const token = await createAccessToken({id: UserFound._id})

        res.cookie('token', token)
        res.json({
            id: UserFound._id,
            username: UserFound.username,
            email: UserFound.email

        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const logout = async (req,res) =>{
    res.cookie('token', "" ,{
        expires: new Date(0),
    });
    return res.sendStatus(200);

}

export const profile = async(req,res)=>{
    const UserFound = await User.findById(req.user.id)
    if(!UserFound) return res.status(400).json({
        message: 'User not found bby'
    })
    
    return res.json({
        id: UserFound._id,
        username: UserFound.username,
        email: UserFound.email
    })
    res.send('profile')
}