import { Router } from 'express'
import User from './models/User'
const router = Router()

// Authentication and register
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body)
    await user.save()

    res.send({
        msg: "User created successfully"
    })
})

export default router

