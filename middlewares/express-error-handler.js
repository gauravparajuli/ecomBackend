export const notFoundHandler = (req, res, next) => {
    const error = new Error(`Resource not found ${req.originalUrl}`)
    error.statusCode = 404
    next(error)
}

export const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV == 'production') {
        res.status(err.statusCode || 500).send('<h1>Internal Server Error</h1>')
        next()
    } else {
        res.status(err.statusCode || 500).json(err) // send the error object for debugging purpose
        next()
    }
}
