import User from "../models/User"
import { Request, Response } from "express"
import { hashPass } from "../utils/auth"

const create = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        const error = new Error('User already registered.')
        res.status(409).json( { error: error.message } )
        return
    }
    
    const user = new User(req.body)
    user.password = await hashPass(password)
    await user.save()

    res.status(201).send({
        msg: "User created successfully"
    })
}

export default create