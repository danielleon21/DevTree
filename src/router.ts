import { Router } from 'express'
import create from './handlers'
const router = Router()

// Authentication and register
router.post('/auth/register', create)

export default router

