import User from '../../models/User'

export const showUser = (req, res) => {
	req.profile.hashed_password = undefined
	req.profile.salt = undefined

	return res.json({ profile: req.profile })
};

export const updateUser = (req, res) => {
	User.findOneAndUpdate(
		{ _id: req.profile._id },
		{ $set: req.body},
		{ new: true },
		(error, user) => {
			if (error) {
				return res.status(400).json({
					error: 'You are not authorized to perform this action',
					message: error
				})
			}

			user.hashed_password = undefined
			user.salt = undefined
			res.json({ user })

		}
	)
}

export const getUserById = (req, res, next, id) => {
	User.findById(id).exec((err, user) => {
		if (err) {
			return res.status(400).json({
				error: 'There was an error finding a user by that ID'
			})
		}

		if (!user) {
			return res.status(404).json({
				error: 'A user by that ID was not found.'
			})
		}

		req.user = user
		next()
	})
}

export const getUserByEmail = (req, res, next) => {
	User.find({email: req.email}, (error, result) => {
		if (error) {
			return res.status(400).json({
				message: 'Error finding a user by email',
				error: error
			})
		}

		req.user = result
		next()

	})
}
