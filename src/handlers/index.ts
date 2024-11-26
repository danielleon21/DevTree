import User from "../models/User"

const create = async (req, res) => {
    const user = new User(req.body)
    await user.save()

    res.send({
        msg: "User created successfully"
    })
}

export default create