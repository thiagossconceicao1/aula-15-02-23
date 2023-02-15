import { Router } from "express";
import { Request, Response } from "express"
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',(req:Request, res:Response) =>{
    res.send("SERVIDOR RODANDO 8D")
})

router.get('/usuarios', usuarioController.index)

export default router 