import mongoose from 'mongoose';
import crypto from 'crypto';
import {v4 as uuidv4 } from 'uuid'

const userSchema = new mongoose.Schema({

	email: {
		type: String,
		trim: true,
		required: true,
		unique: 100
	},

	hashed_password: {
		type: String,
		required: true
	},
	salt: String,
	auth_token: String,
	authenticated_at: {
		type: Date
	}

}, { timestamps: true })

userSchema.virtual('password')
	.set(function (password) {
		this._password = password
		this.salt = uuidv4()
		this.hashed_password = this.encryptPassword(password)
	})
	.get(function () {
		return this._password
	})

userSchema.methods = {
	authenticate: function (plainText) {
		return this.encryptPassword(plainText) === this.hashed_password
	},

	encryptPassword: function(password) {
		if (!password) return '';

		try {
			return crypto.createHmac('sha1', this.salt)
				.update(password)
				.digest('hex')
		} catch (error) {
			return error;
		}
	}
}

export default mongoose.model('User', userSchema)
