import { Request, Response } from "express";
import { user } from "./Interfaces/user";
import { v4 } from "uuid"

const users:user[] =[]

export const createUser=async(req:Request, res:Response)=>{
    try {
        const id = v4()

        //The request body
        const {name, email, phone_number, role, password, kraPin}:user = req.body

        const newUser = {
            user_id:id, name, email, phone_number, role, password, kraPin
        }

        users.push(newUser)

        return res.json({
            message:'Account created successfully',

            user:newUser
        })
    } catch (error) {
        return res.json({error})
    }
}