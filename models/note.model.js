const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
	title: {
		type: String, 
		required: true
	},
	content: {
		type: String
	},
	description: {
		type: String,
		required: true
	},
	creationDate: {
		type: Date,
		default: Date.now
	},
	modificationDate: {
		type: Date,
		default: Date.now
	},
	expirationDate: {
		type: Date,
		default: Date.now
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;