
import Contact from '../../models/Contact'
import { errorHandler } from '../../helpers/dbErrorHandler'

export const getAllContacts = async (req, res) => {
	await Contact.find({}, (err, result) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}

		if (!result) {
			return res.status(404).json({
				message: 'There are no contacts available'
			})
		}

		const contacts = result.map((contact) => {
			return {
				_id: contact._id,
				name: contact.name,
				address: contact.address,
				phone: contact.phone,
				email: contact.email,
				password: contact.password

			}
		})

		res.json({
			contacts
		})
	})
}

/**
 * getContact
 * Relies on middleware contactById for its result
 * @param req
 * @param res
 * @returns {Promise<Contact>}
 */
export const getContact = async (req, res) => {
	return await res.json(req.contact)
}

/**
 * Contact By ID middleware
 * @param req
 * @param res
 * @param next
 * @param id
 */
export const contactById = async (req, res, next, id) => {
	await Contact.findById(id).exec((err, contact) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}

		if (!contact) {
			return res.status(404).json({
				message:  'There is no contact by the passed ID'
			})
		}

		req.contact = contact
		next()
	})
}

export const createContact = async (req, res) => {
	let request = req.body;
	 const contact = new Contact({
		name: {
			first: request.name.first,
			middle: request.name.middle,
			last: request.name.last
		},
		address: {
			street: request.address.street,
			city: request.address.city,
			state: request.address.state,
			zip: request.address.zip
		},
		phone: req.body.phone,
		email: request.email
	})

	await contact.save((err, contact) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}
		const {_id, name, address, phone, email, createdAt, updatedAt} = contact
		return res.json({
			_id,
			name,
			address,
			phone,
			email,
			createdAt,
			updatedAt
		})
	})
}

export const updateContact = async (req, res) => {
	const contact = req.contact
	contact.name = req.body.name
	contact.address = req.body.address
	contact.phone = req.body.phone
	contact.email = req.body.email
	contact.password = req.body.password

	await contact.save((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}

		const {_id, name, address, phone, email, createdAt, updatedAt} = data

		res.json({
			_id,
			name,
			address,
			phone,
			email,
			createdAt,
			updatedAt
		})
	})
}

export const deleteContact = async (req, res) => {
	const contact = req.contact
	contact.remove((err, deletedContact) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}

		const {_id, name, address, phone, email, createdAt, updatedAt} = deletedContact

		res.json({
			contact: {
				_id,
				name,
				address,
				phone,
				email,
				createdAt,
				updatedAt
			},
			message: 'Contact has been permanently removed'
		})
	})
}
