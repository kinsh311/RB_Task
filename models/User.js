const mongoose = require('mongoose');
const {Schema} = mongoose;
const user = new Schema({
    name:String
})
module.exports = user;