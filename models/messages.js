var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

MessageSchema.virtual('url').get(function () {
    return '/views/message/' + this._id;
});

module.exports = mongoose.model('Message', MessageSchema);