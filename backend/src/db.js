// conexion con base de datos
import mongoose, { mongo } from "mongoose";

export const ConnectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://JuanBautista:JuanBautista1972@atlascluster.lazttss.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster')
        console.log('Db is connected')
    
    }catch(error){x 
        console.log(error)
    }

}