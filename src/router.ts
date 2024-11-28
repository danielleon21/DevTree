import { Router } from 'express'
import {create, login} from './handlers'
import { body } from 'express-validator'
import { handleInputsErrors } from './middlewares/validation'
const router = Router()

//register
router.post('/auth/register', 
    body(['handle', 'name', 'email', 'password']).trim().notEmpty().withMessage('cannot be empty'),
    body('email').isEmail().withMessage('is not valid'),
    body('password').isLength({min: 8}).withMessage('has to be longer than 8 characters'),
    handleInputsErrors,
    create)

// authentication
router.post('/auth/login', 
    body(['email', 'password']).trim().notEmpty().withMessage('cannot be empty'),
    body('email').isEmail().withMessage('is not valid'),
    body('password').isLength({min: 8}).withMessage('has to be longer than 8 characters'),
    handleInputsErrors,
    login)


export default router

