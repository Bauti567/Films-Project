// Controlador de autenticacion de usuario
import User from "../schemas/user.schema.js";
import bcrypt from 'bcryptjs'


export const registerUser = async (req,res)=>{
    console.log('Registrando usuario')
}

export const login = async(req,res) =>{
    console.log('logeando usuario')
}

export const logout = async (req,res) =>{
    console.log('cerrando sesion')
}