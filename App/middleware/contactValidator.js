export const contactValidator = (res, req, next) => {
	req.check('name.first', 'Name is required').notEmpty()
	req.check('name.last', 'Last Name is required').notEmpty()
	req.check('email', 'Email must be between 4 and 32 characters')
		//.matches(/.+\@.+\..+/)
		.matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
		.withMessage('Email must be a proper email address')
		.isLength({
			min: 4,
			max: 32
		})

	req.check('address.street', 'Street and street number are required').notEmpty()
	req.check('address.city', 'City is required in an address').notEmpty()
	req.check('address.state', 'State is required in an address').notEmpty()
	req.check('address.zip', 'Zip code is required in an address').notEmpty()
	req.check('phone.number', 'Phone number should be 10 digits')
		.isMobilePhone('en-US')

	const errors = req.validationErrors()

	if (errors) {
		const firstError = errors.map(error => error.msg)[0]
		return res.status(400).json({error: firstError})
	}

	next()


}
