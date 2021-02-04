const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: "Please enter your Name",
	},
	contact: {
		type: String,
		trim: true,
	},
	message: {
		type: String,
		trim: true,
	},
});

const Contact = mongoose.model("Transaction", contactSchema);

module.exports = Contact;
