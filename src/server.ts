import express, { NextFunction, Request, Response, json } from 'express'
import userRouter from './Router/user.router'

//store express in variable to use
const app = express()

//Enable json
app.use(json())

//create base url for creating a user after enabling json
app.use('/kraUusers', userRouter)

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