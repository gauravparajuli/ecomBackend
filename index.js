import app from './app.js'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.CONNECTION_STRING).then(() => {
        console.log('.: connected to database :.')
        app.listen(PORT, () => {
            console.log(`.: express server running at port ${PORT} :.`)
        })
    })
} else {
    mongoose.connect('mongodb://localhost:27017/ecom-backend').then(() => {
        console.log('.: connected to database :.')
        app.listen(PORT, () => {
            console.log(`.: express server running at port ${PORT} :.`)
        })
    })
}
