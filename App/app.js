import express from 'express'
import authRoutes from './routes/auth'
import contactRoutes from './routes/contact'
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import expressValidator from "express-validator";

const app = express()
//middleware
app.use(morgan('dev')) // logging
app.use(bodyParser.json()) // parsing request objects
app.use(cors()) // handle requests from different domains
app.use(expressValidator()) //request validation

app.use('/api', authRoutes)
app.use('/api', contactRoutes)

export default app;
