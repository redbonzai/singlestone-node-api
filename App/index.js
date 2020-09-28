import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import chalk from 'chalk'
import cors from 'cors'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'

import authRoutes from './routes/auth'
import contactRoutes from './routes/contact'

const app = express()

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() => console.log(chalk.blue.bold(`MongoDB database connected`)))

//middleware
app.use(morgan('dev')) // logging
app.use(bodyParser.json()) // parsing request objects
app.use(cors()) // handle requests from different domains
app.use(expressValidator()) //request validation

app.use('/api', authRoutes)
app.use('/api', contactRoutes)
app.get('api/', (req, res) => {
	let get = app._router.stack.filter(r => r.route && r.route.methods.get).map(r => r.route.path);
	let post = app._router.stack.filter(r => r.route && r.route.methods.post).map(r => r.route.path);
	res.send({ get: get, post: post });

})

const port = process.env.PORT || 3200

app.listen(port, () => {
	console.log(chalk.blue.bold(`Server is now running on port ${port}`))
	console.log(chalk.blue.bold(`Server URL is ${process.env.APP_DOMAIN}`))
})


