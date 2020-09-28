import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
	number: {
		type: String,
		required: true,
		maxlength: 20
	},
	numberType: {
		type: String,
		maxlength: 20
	}

}, { timestamps: true });

export default mongoose.model('Phone', phoneSchema);
