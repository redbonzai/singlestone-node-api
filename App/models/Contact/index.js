import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema;

const contactSchema = new mongoose.Schema({
	name: {
		first: {
			type: String,
			trim: true,
			required: true,
			maxlength: 32
		},
		middle: {
			type: String,
			trim: true,
			required: true,
			maxlength: 32
		},
		last: {
			type: String,
			trim: true,
			required: true,
			maxlength: 32
		},
	},

	address: {
		street: {
			type: String,
			required: true,
			maxlength: 100
		},
		city: {
			type: String,
			required: true,
			maxlength: 100
		},
		state: {
			type: String,
			required: true,
			maxlength: 25
		},
		zip: {
			type: String,
			required: true,
			maxlength: 11
		}
	},
	phone: [{
		number: {
			type: String,
			maxlength: 12
		},
		type: {
			type: String,
			maxlength: 15
		}
	}],
	email: {
		type: String,
		required: true,
		maxlength: 100
	}

}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
