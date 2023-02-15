
import {Request, Response} from 'express'
import { Usuario } from '../models/Usuarios'

export const index = async(req:Request, res:Response) =>{

    let users = await Usuario.findAll()

    res.render("pages/usuario",{
        users
    })
}
