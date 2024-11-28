import { Router } from 'express'
import create from './handlers'
import { body } from 'express-validator'
const router = Router()

// Authentication and register
router.post('/auth/register', 
    body(['handle', 'name', 'email', 'password']).trim().notEmpty().withMessage('cannot be empty'),
    body('email').isEmail().withMessage('is not valid'),
    body('password').isLength({min: 8}).withMessage('has to be longer than 8 characters'),
    create)

export default router

