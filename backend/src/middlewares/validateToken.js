//Middleware, antes de que llegue a una ruta
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies
    if(!token) return res.status(401).json({
        message: "No token no login bb"
    })
    
    jwt.verify(token, TOKEN_SECRET,(err, user)=>{
        if(err) return res.status(403).json({
            message: 'Invalid token mi amor'
            
        })
        req.user = user

        console.log(user)

    })
    next()

}
