import app from "./app.js";
import { ConnectDB } from "./db.js";

ConnectDB();

const PORT = 3000
app.listen(PORT,()=>{
    console.log('App is running on port: ',PORT)
})