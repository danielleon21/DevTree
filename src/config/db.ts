import mongoose from "mongoose"
import colors from 'colors'

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        
        const uri = `${connection.host}:${connection.port}`

        console.log(colors.cyan.bold(`MongoDB database connected on port ${uri}`))
    }catch(error){
        console.log(colors.bgRed.white.bold(error))
        process.exit(1)
    }
}