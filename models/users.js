var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    membershipStatus: {
        type: Boolean,
        required: true
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: false
    }]
});

UserSchema.virtual('url').get(function () {
    return '/views/user/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);