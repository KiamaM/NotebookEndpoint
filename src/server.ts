import express, { NextFunction, Request, Response, json } from 'express'
import noteRouter from './Router/note.router'

//store express in variable to use
const app = express()

//Enable json
app.use(json())

//create base url for creating a user after enabling json
app.use('/newNote', noteRouter)
app.use('/getNotes', noteRouter)
app.use('/getOneNote', noteRouter)

//Pass all arguments needed at end point
app.use((error:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message:error.message
    })
})

//Declare port to run server
let port:number = 4200

//Listen to port and log when running
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})