import mssql from 'mssql'
import { Request, Response } from "express";
import { note } from "./Interfaces/notes";
import { v4 } from "uuid"
import { sqlConfig } from "../Config/sql.config";

const notes:note[] =[]

export const createNote=async(req:Request, res:Response)=>{
    try {
        const id = v4()

        //The request body
        const {note_id, title, content, createdAt}:note = req.body

        const newNote = {
            note_id:id, title, content, createdAt
        }

        const pool = await mssql.connect(sqlConfig)

        let result = await pool.request()
        .input('note_id', id)
        .input('title', title)
        .input('content', content)
        .input('createdAt', createdAt)
        .execute('newNote')

        console.log(result);
        


        return res.json({
            message:'Account created successfully',

            user:newNote
        })
    } catch (error) {
        return res.json({error})
    }
}


export const getAllNotes=async(req:Request, res:Response)=>{
    try {
        const id = v4()

        const pool = await mssql.connect(sqlConfig)

        let result = await pool.request()
        .execute('getALLNotes')

        console.log(result);
        


        return res.json({
            message:'Command executed successfully',
            notes:notes
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getOneNote=async(req:Request, res:Response)=>{
    try {
        const id = v4()

        const pool = await mssql.connect(sqlConfig)

        let result = await pool.request()
        .input("note_id", id)
        .execute('getOneNote')

        console.log(result);
        


        return res.json({
            message:'Command executed successfully',
            notes:notes
        })
    } catch (error) {
        return res.json({error})
    }
}