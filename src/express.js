import express from 'express'
import logger from 'morgan'
import { router } from './route/index.js'
import { errorHandler } from './middleware/errorHandler.js'

export const app = express()

// Use the morgan logger
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev', { immediate: true }))
}

// Use the public folder for static resources
app.use(express.static('public'))

// Mount the routes
app.use('/', router)

// Middleware for 404
app.use(errorHandler.notFoundDefault)

// Global felhanterare
app.use(errorHandler.errorDefault)


 

