import { Router } from 'express'

const router = Router()

//Routing
router.get('/', (req, res) => {
    res.send('Hello World from Express! / Typescript!')
})

router.get('/us', (req, res)=> {
    res.send('About Us! (Demo endpoint for routing practice')
})

export default router

