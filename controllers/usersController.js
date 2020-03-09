var User = require('../models/users');
var Messages = require('../models/messages');

var async = require('async');
// ????????

exports.index = function(req, res) {
    res.render('index', {title: 'members-only', error: err, data: results});
}