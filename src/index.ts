import colors from 'colors'
import app from './server'
const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(colors.blue.italic(`Server is running on port ${port}`))
})