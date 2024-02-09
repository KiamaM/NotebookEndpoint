import { Router } from "express";
import { createUser } from "../Controllers/user.controller";

const userRouter = Router()

userRouter.post('/', createUser)

export default userRouter