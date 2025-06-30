import User from "../models/User"
import type { Request, Response } from "express"
import { checkPass, hashPass } from "../utils/auth"
import slug from 'slug'

export const create = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        const error = new Error('User already registered.')
        res.status(409).json( { error: error.message } )
        return
    }

    const handle = slug(req.body.handle, "")
    const handlerExist = await User.findOne({ handle })
    
    if(handlerExist) {
        const error = new Error(`User handler: ${handle} already exists`)
        res.status(409).json( { error: error.message } )
        return
    }

    const user = new User(req.body)
    user.password = await hashPass(password)
    user.handle = handle
    await user.save()

    res.status(201).send({
        msg: "User created successfully"
    })
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const userExist = await User.findOne({email})

    if(!userExist){
        const error = new Error('User doesnt exist')
        res.status(404).json( { error: error.message } )
        return
    }

    const match = await checkPass(password, userExist.password)

    if(!match){
        const error = new Error('User password doesnt match.')
        res.status(401).json( { error: error.message } )
        return
    }

    res.send({msg: "ok"})
}
