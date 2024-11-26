import User from "../models/User"
import { Request, Response } from "express"

const create = async (req: Request, res: Response) => {
    const { email } = req.body

    const userExist = await User.findOne({email})

    console.log(userExist)


    return 
    
    const user = new User(req.body)
    await user.save()

    res.send({
        msg: "User created successfully"
    })
}

export default create