import { Router } from "express";
import { createNote } from "../Controllers/notes.controller";
import {getAllNotes} from "../Controllers/notes.controller";
import {getOneNote} from "../Controllers/notes.controller";

const noteRouter = Router()

noteRouter.post('/', createNote)
noteRouter.get('/', getAllNotes)
noteRouter.get('/', getOneNote)

export default noteRouter