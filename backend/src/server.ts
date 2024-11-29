import express from 'express'
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'
const app = express()

// Enable form data read
app.use(express.json())
connectDB()


app.use('/', router)

export default app