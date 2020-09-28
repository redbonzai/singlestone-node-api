import app from './app'
import mongoose from 'mongoose'
import chalk from 'chalk'

mongoose.set('useFindAndModify', false)
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true

}).then(() => console.log(chalk.blue.bold(`MongoDB database connected`)))

const port = process.env.PORT || 3200

app.listen(port, () => {
	console.log(chalk.blue.bold(`Server is now running on port ${port}`))
	console.log(chalk.blue.bold(`Server URL is ${process.env.APP_DOMAIN}`))
})


