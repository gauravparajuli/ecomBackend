import path from 'path'

import express from 'express'

import {
    notFoundHandler,
    errorHandler,
} from './middlewares/express-error-handler.js'

import productRoutes from './routes/product-routes.js'
import userRoutes from './routes/user-routes.js'
import orderRoutes from './routes/order-routes.js'
import productCategoriesRoutes from './routes/upload-routes.js'

const app = express()

app.use(express.json()) // parse json body

// register your routes here
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/prod-cat', productCategoriesRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))) // this is where the uploaded images will be saved

app.use(notFoundHandler)
app.use(errorHandler)

export default app
