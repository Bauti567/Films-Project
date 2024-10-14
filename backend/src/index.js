import express from 'express'
import { ConnectDB } from './db.js'

const app = express()


ConnectDB()
const PORT = 3000
app.listen(PORT,()=>{
    console.log('App is running on port: ',PORT)
})