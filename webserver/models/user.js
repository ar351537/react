const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    id: String
     });

const userinfo = mongoose.model('usermodel', user);
module.exports = userinfo;
