// el modelo almacena los datos dentro de la base de datos :)
// para procesar formularios

import mongoose, { mongo } from "mongoose";

// Es una forma de especificar como se van a ver los datos para almacenar

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true // Elimina los espacios
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true  
    }
});


export default mongoose.model('Users', userSchema)

