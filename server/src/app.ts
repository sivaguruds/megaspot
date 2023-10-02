import express from 'express'
import cors from 'cors'

import { errorHandler } from './middleware/errorHandler';

const app = express()

// API routes:
import indexRoute from  './routes/index'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(cors())

app.use(indexRoute)

// Add error handling as the last middleware, just prior to our app.listen call.
// This ensures that all errors are always handled.
app.use(errorHandler);


export default app