const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, min_length: 3, max_length: 32},
    password: {type: String, min_length: 5, max_lenght: 32},
    portfolio: [{
        name: {type: String, required: true},
        ticker: {type: String, required: true}
    }]   
})

module.exports = mongoose.model('User', UserSchema)