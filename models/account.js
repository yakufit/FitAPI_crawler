var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
	email: String,
	apiKeySetPK: Schema.ObjectId
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
