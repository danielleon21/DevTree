import User from "../models/User"
import { Request, Response } from "express"

const create = async (req: Request, res: Response) => {
    const { email } = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        const error = new Error('User already registered.')
        res.status(409).json( { error: error.message } )
        return
    }
    
    const user = new User(req.body)
    await user.save()

    res.status(201).send({
        msg: "User created successfully"
    })
}

export default create